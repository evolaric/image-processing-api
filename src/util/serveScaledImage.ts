import { Request, Response, NextFunction } from 'express';

export function serveScaledImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //if a request with just one dimension paramter comes through, the image is scaled and served
  if (req.query.name && (!req.query.height || !req.query.width))
    console.log('serveScaledImage');
  next();
}

export default serveScaledImage;
