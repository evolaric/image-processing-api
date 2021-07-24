import { Request, Response, NextFunction } from 'express';

export function checkQuery(req: Request, res: Response, next: NextFunction) {
  if (!req.query.name) {
    return res.status(404).send('404 error: no image file was specified');
  }

  next();
}

export default checkQuery;
