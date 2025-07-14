const express = require('express');
const { uploadFile } = require('../services/supabase');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { file, userId, type } = req.body;
    const filePath = `ghosts/${userId}/${Date.now()}-${type}`;
    await uploadFile(filePath, file);
    res.json({ message: 'File uploaded', path: filePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;