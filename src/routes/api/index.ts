// host:/api/
import express, { Request, Response } from 'express';
import docs from '../../util/docs';

const api = express.Router();

// displays basic API documentation in JSON format
api.get('/api', (_req: Request, res: Response): void => {
  res.json(docs);
});

export default api;
