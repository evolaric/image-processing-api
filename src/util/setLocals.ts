import { Request, Response, NextFunction } from 'express';

// at this point, the query is clean, and we can use that
// to extrapolate all the needed paramters for image processing

export function setLocals(req: Request, res: Response, next: NextFunction): void {
  res.locals.name = req.query.name || null;
  res.locals.height = Number(req.query.height) || null;
  res.locals.width = Number(req.query.width) || null;
  next();
}

export default setLocals;
