export default async function generateMd (data, address, chain) {
    let md = '---'
    md += `\ntitle: ${data.title}`
    md += `\ndescription: \'${data.description}\'`
    md += '\n---'
    md += '\n> Lending & Borrowing'
    md += `\n${data.connectorVersion} connector triggers methods like ${data.functions.map(o => o.functionName).join(', ')}.`
    if (chain === 'mainnet') md += ` You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/${address}#code).`
    md += '\n'
    md += `\n- Use \`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\` to indicate ${chain === 'mainnet'? 'ETH' : 'MATIC' }.`
    md += '\n- use -1 or `dsa.maxValue` for the maximum amount in function.'
    md += '\n- If not sure about the arguments `getId` and `setId`, pass 0.'
    for (let index = 0; index < data.functions.length; index++) {
      const func = data.functions[index]
      md += '\n'
      md += '\n---'
      md += '\n'
      md += `\n### ${func.functionName.charAt(0).toUpperCase() + func.functionName.slice(1)}`
      md += '\n'
      md += `\n${func.description}`
      md += '\n'
      md += '\n```javascript'
      md += '\nspells.add({'
      md += `\n  connector: "${data.connectorId}",`
      md += `\n  method: "${func.functionName}",`
      md += `\n  args: [${func.parameters.map(o => o.name).join(', ')}]`
      md += '\n});'
      md += '\n```'
      md += '\n'
  
      md += '\n<table class="table">'
      md += '\n  <tr>'
      md += '\n    <th>Parameter</th>'
      md += '\n    <th>Type</th>'
      md += '\n    <th>Description</th>'
      md += '\n  </tr>'
      for (let index = 0; index < func.parameters.length; index++) {
        const parameter = func.parameters[index]
        md += '\n   <tr>'
        md += `\n     <td><code>${parameter.name}</code></td>`
        md += `\n     <td>${parameter.type}</td>`
        md += `\n     <td>${parameter.description}</td>`
        md += '\n   <tr>'
      }
      md += '\n</table>'
    }
    return md
  }