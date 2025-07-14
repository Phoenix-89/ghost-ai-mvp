const express = require('express');
const { generateResponse } = require('../services/openrouter');
const { getEmbedding } = require('../services/chromadb');
const { textToSpeech } = require('../services/playht');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, message } = req.body;
    const memory = await getEmbedding(userId);
    const response = await generateResponse(message, memory);
    const audio = await textToSpeech(response);
    res.json({ text: response, audio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;