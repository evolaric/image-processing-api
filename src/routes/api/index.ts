// host:/api/
import express from 'express';

const api = express.Router();

api.get('/api', (req, res) => {
  res.send(`<h2>placeholder: api endpoint</h2>`);
});

export default api;
