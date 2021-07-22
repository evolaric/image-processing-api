import express from 'express';

const topLevel = express.Router();

topLevel.get('/', (req, res) => {
  res.send(`<h2>placeholder: top level endpoint</h2>`);
});

export default topLevel;
