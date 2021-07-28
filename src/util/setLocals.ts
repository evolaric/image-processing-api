import { Request, Response, NextFunction } from 'express';
import { deconstructFileName, setDestination, setFilePath } from './localsHelpers';

//At this point, the query is clean and we can attach derived attributes to res.locals
//This should allow us to send res.locals to sharp instead of a bunch of hard to read variables

export function setLocals(req: Request, res: Response, next: NextFunction): void {
  res.locals.name = String(req.query.name); // this is the raw file name
  res.locals.height = Number(req.query.height) || null;
  res.locals.width = Number(req.query.width) || null;
  [res.locals.fileBaseName, res.locals.fileExtension, res.locals.rawImagePath] = deconstructFileName(res.locals.name);
  res.locals.destinationDirectory = setDestination(res.locals.height, res.locals.width);
  res.locals.finalFilePath = setFilePath(
    res.locals.fileBaseName,
    res.locals.fileExtension,
    res.locals.height,
    res.locals.width,
    res.locals.destinationDirectory
  );

  next();
}

export default setLocals;
