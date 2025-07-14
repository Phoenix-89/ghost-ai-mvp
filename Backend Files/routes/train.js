const express = require('express');
const { embedText } = require('../services/openrouter');
const { storeEmbedding } = require('../services/chromadb');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, textData } = req.body;
    const embedding = await embedText(textData);
    await storeEmbedding(userId, embedding);
    res.json({ message: 'Ghost training started' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;