const axios = require('axios');

async function textToSpeech(text) {
  const response = await axios.post('https://api.play.ht/v2/tts', {
    text,
    voice: 's3://voice-cloning-zero-shot/12345/sample-voice.mp3',
  }, { headers: { Authorization: `Bearer ${process.env.PLAYHT_API_KEY}` } });
  return response.data.audioUrl;
}

module.exports = { textToSpeech };