import { Request, Response, NextFunction } from 'express';
import path from 'path';
import processImage from './processImage';

// if a request with just one dimension paramter comes through, the image is scaled and served
export function serveScaledImage(req: Request, res: Response, next: NextFunction): unknown {
  const scaledDir = path.join(__dirname + '../../images/thumbnails/scaled/');

  if (req.query.name && (!req.query.height || !req.query.width)) {
    return processImage(req, res, scaledDir);
  }
  next();
}

export default serveScaledImage;
