"""Load html from files, clean up, split, ingest into Weaviate."""
from pathlib import Path

from pathlib import Path
import shutil
from typing import List

from langchain.docstore.document import Document
from langchain.document_loaders.base import BaseLoader


class DocusLoader(BaseLoader):
    """Loader that loads ReadTheDocs documentation directory dump."""

    def __init__(self, path: str):
        """Initialize path."""
        self.file_path = path

    def load(self) -> List[Document]:
        """Load documents."""
        from bs4 import BeautifulSoup

        def _clean_data(data: str) -> str:
            soup = BeautifulSoup(data, features="lxml")
            text = soup.find_all("article", {"class": "page-body"})
            if len(text) != 0:
                text = text[0].get_text()
            else:
                text = ""
            return "\n".join([t for t in text.split("\n") if t])

        docs = []
        for p in Path(self.file_path).rglob("*"):
            if p.is_dir():
                continue
            with open(p) as f:
                text = _clean_data(f.read())
            metadata = {"source": "https://" + str(p)}
            docs.append(Document(page_content=text, metadata=metadata))
        return docs

def ingest_docs():
    """Get documents from web pages."""
    loader = DocusLoader("docs.instadapp.io/")
    raw_documents = loader.load()
    shutil.rmtree("ingested_data", ignore_errors=True)
    dir_path = Path("ingested_data")
    dir_path.mkdir(parents=True, exist_ok=True)
    for i, doc in enumerate(raw_documents):
        path = dir_path / f"{i}.json"
        with open(path, "w") as f:
            f.write(doc.json())



if __name__ == "__main__":
    ingest_docs()
