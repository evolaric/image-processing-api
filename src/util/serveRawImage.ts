import { Request, Response, NextFunction } from 'express';
import path from 'path';
import doesFileExist from './doesFileExist';

export function serveRawImage(req: Request, res: Response, next: NextFunction) {
  const filename = req.query.name;
  const imageDir = __dirname + '../../images/raw-images/';
  const imagePath = path.join(imageDir + filename);

  // if a request comes through with just a file name, serves a raw image
  if (req.query.name && !req.query.height && !req.query.width) {
    const checkFile = doesFileExist(imagePath);
    if (checkFile) {
      return res.sendFile(imagePath);
    } else {
      return res.send('file not found');
    }
  }
  next();
}

export default serveRawImage;
