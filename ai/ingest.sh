# Bash script to ingest data
# This involves scraping the data from the web and then cleaning up and putting in Weaviate.
# Error if any command fails
set -e
wget -r -R "*.js, *.css, .txt, .jpg, .png, ai" https://docs.instadapp.io
python3 ingest.py
