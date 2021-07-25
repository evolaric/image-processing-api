import { Request, Response, NextFunction } from 'express';

// Checks to see if the URL requested is valid
export function checkQuery(req: Request, res: Response, next: NextFunction): unknown {
  if (!req.query.name) {
    return res
      .status(404)
      .json({ error: '404: File Not Found', message: 'URL must contain a valid file name and optional parameters' });
  }
  next();
}

export default checkQuery;
