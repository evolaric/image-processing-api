import { Request, Response, NextFunction } from 'express';
import doesFileExist from './doesFileExist';

export function serveResizedImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //if a request with height and width comes is, serves a resized image
  if (req.query.name && req.query.height && req.query.width) {
    console.log('serveResizedImage');
    return res.send('this is the resized image thing');
    next();
  }
}

export default serveResizedImage;
