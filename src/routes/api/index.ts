// host:/api/
import express from 'express';
import docs from '../../util/docs';

const api = express.Router();

// displays basic API documentation in JSON format
api.get('/api', (req, res): void => {
  res.json(docs);
});

export default api;
