const axios = require('axios');

async function embedText(text) {
  const response = await axios.post('https://openrouter.ai/api/v1/embeddings', {
    model: 'text-embedding-ada-002',
    input: text,
  }, { headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` } });
  return response.data.data[0].embedding;
}

async function generateResponse(message, memory) {
  const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
    model: 'meta-llama/llama-3.1-8b-instruct:free',
    messages: [
      { role: 'system', content: `You are a Ghost AI, trained on user memories: ${JSON.stringify(memory)}` },
      { role: 'user', content: message },
    ],
  }, { headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` } });
  return response.data.choices[0].message.content;
}

module.exports = { embedText, generateResponse };