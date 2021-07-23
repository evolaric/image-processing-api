import { Request, Response, NextFunction } from 'express';

export function serveResizedImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //if a request with height and width comes is, serves a resized image
  if (req.query.name && req.query.height && req.query.width)
    console.log('serveResizedImage');
  next();
}

export default serveResizedImage;
