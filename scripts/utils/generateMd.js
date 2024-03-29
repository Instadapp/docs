function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

export default async function generateMd(data, address, chain) {
  let nativeToken;
  let explorerLink;
  if (chain === "mainnet") {
    nativeToken = "ETH";
    explorerLink = `[Etherscan](https://etherscan.io/address/${address}#code)`;
  } else if (chain === "arbitrum") {
    nativeToken = "ETH";
    explorerLink = `[Etherscan](https://arbiscan.io/address/${address}#code)`;
  } else if (chain === "avalanche") {
    nativeToken = "AVAX";
    explorerLink = `[Snowtrace](https://snowtrace.io/address/${address}#code)`;
  } else if (chain === "polygon") {
    nativeToken = "MATIC";
    explorerLink = `[Polygonscan](https://polygonscan.com/address/${address}#code)`;
  } else if (chain === "optimism") {
    nativeToken = "ETH";
    explorerLink = `[Etherscan](https://optimistic.etherscan.io/address/${address}#code)`;
  } else if (chain === "fantom") {
    nativeToken = "ETH";
    explorerLink = `[Etherscan](https://ftmscan.com//address/${address}#code)`;
  } else {
    nativeToken = "ETH";
    explorerLink = `[Etherscan](https://etherscan.io/address/${address}#code)`;
  }
  let md = `---
title: ${data.title}
---

# ${data.title} - ${titleCase(chain)}
`;
  md += `\n> ${data.description}`;
  md += `\n${
    data.connectorVersion
  } connector on ${chain} triggers methods like ${data.functions
    .map((o) => o.functionName)
    .join(", ")}.`;
  md += ` You can view details like source code, ABIs on ${explorerLink}.`;
  md += "\n";
  md += `\n- Use \`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\` to indicate ${nativeToken}.`;
  md += "\n- use -1 or `dsa.maxValue` for the maximum amount in function.";
  md += "\n- If not sure about the arguments `getId` and `setId`, pass 0.";
  for (let index = 0; index < data.functions.length; index++) {
    const func = data.functions[index];
    md += "\n";
    md += "\n---";
    md += "\n";
    md += `\n### ${
      func.functionName.charAt(0).toUpperCase() + func.functionName.slice(1)
    }`;
    md += "\n";
    md += `\n${func.description}`;
    md += "\n";
    md += "\n```javascript";
    md += "\nspells.add({";
    md += `\n  connector: "${data.connectorId}",`;
    md += `\n  method: "${func.functionName}",`;
    md += `\n  args: [${func.parameters.map((o) => o.name).join(", ")}]`;
    md += "\n});";
    md += "\n```";
    md += "\n";

    md += '\n<table class="table">';
    md += "\n  <tr>";
    md += "\n    <th>Parameter</th>";
    md += "\n    <th>Type</th>";
    md += "\n    <th>Description</th>";
    md += "\n  </tr>";
    for (let index = 0; index < func.parameters.length; index++) {
      const parameter = func.parameters[index];
      md += "\n   <tr>";
      md += `\n     <td><Badge>${parameter.name}</Badge></td>`;
      md += `\n     <td><Badge>${parameter.type}</Badge></td>`;
      md += `\n     <td>${parameter.description}</td>`;
      md += "\n   <tr>";
    }
    md += "\n</table>";
  }
  return md;
}
