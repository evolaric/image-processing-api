import { Request, Response, NextFunction } from 'express';
import path from 'path';
import processImage from './processImage';

export function serveResizedImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const resizedDir = path.join(__dirname + '../../images/thumbnails/resized/');
  //if a request with height and width comes is, serves a resized image
  if (req.query.name && req.query.height && req.query.width) {
    return processImage(req, res, resizedDir);
  }
  next();
}

export default serveResizedImage;
