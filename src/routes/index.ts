import express, { Request, Response } from 'express';

const topLevel = express.Router();

// redirects a call to the base domain to the api route
topLevel.get('/', (_req: Request, res: Response): void => {
  res.redirect('./api');
});

export default topLevel;
