import { Request, Response, NextFunction } from 'express';
import path from 'path';
import doesFileExist from './doesFileExist';

// if a request comes through with just a file name, serves a raw image
export function serveRawImage(req: Request, res: Response, next: NextFunction): unknown {
  const filename = req.query.name;
  const imageDir = path.join(__dirname + '../../images/raw-images/');
  const imagePath = path.join(imageDir + filename);
  console.log(res.locals.name, res.locals.height, res.locals.width);

  if (req.query.name && !req.query.height && !req.query.width) {
    const checkFile = doesFileExist(imagePath);
    if (checkFile) {
      return res.sendFile(imagePath);
    } else {
      return res.status(404).json({ error: 'File does not exist. Check your URL and try again.' });
    }
  }
  next();
}

export default serveRawImage;
