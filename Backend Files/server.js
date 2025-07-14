const express = require('express');
const uploadRouter = require('./routes/upload');
const trainRouter = require('./routes/train');
const chatRouter = require('./routes/chat');
const app = express();

app.use(express.json());
app.use('/api/upload', uploadRouter);
app.use('/api/train', trainRouter);
app.use('/api/chat', chatRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));