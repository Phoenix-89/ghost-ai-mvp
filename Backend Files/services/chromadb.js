const { ChromaClient } = require('chromadb');
const client = new ChromaClient();

async function storeEmbedding(userId, embedding) {
  const collection = await client.getOrCreateCollection({ name: 'ghost-memories' });
  await collection.add({ ids: [userId], embeddings: [embedding] });
}

async function getEmbedding(userId) {
  const collection = await client.getCollection({ name: 'ghost-memories' });
  const result = await collection.query({ where: { id: userId } });
  return result.embeddings[0] || [];
}

module.exports = { storeEmbedding, getEmbedding };