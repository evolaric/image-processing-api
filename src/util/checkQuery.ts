import { Request, Response, NextFunction } from 'express';
import doDirectoriesExist from './doDirectoriesExist';

export function checkQuery(req: Request, res: Response, next: NextFunction) {
  if (!req.query.name) {
    return res.status(404).send('404 error: no image file was specified');
  }

  doDirectoriesExist();

  next();
}

export default checkQuery;
