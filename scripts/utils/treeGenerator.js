import tree from 'github-trees'

export const getTree = async () => {
  try {
    const response = await tree('Instadapp/dsa-connectors', { recursive: true })
    const mains = response.tree
      .map(a => a.path)
      .filter(a => a.endsWith('main.sol') && a.includes('connectors'))
    const mainnet = mains.filter(a => a.startsWith('contracts/mainnet'))
    const polygon = mains.filter(a => a.startsWith('contracts/polygon'))
    return { mainnet, polygon }
  } catch (error) {
    return Promise.reject(error)
  }
}