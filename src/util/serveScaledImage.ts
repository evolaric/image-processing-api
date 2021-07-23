import { Request, Response, NextFunction } from 'express';
import doesFileExist from './doesFileExist';
import path from 'path';
import sharp from 'sharp';

export function processImage(req: Request, res: Response, directory: string) {
  const fileName = String(req.query.name);
  const fileBaseName = fileName.substr(0, fileName.lastIndexOf('.'));
  const imageExtension = path.extname(fileName) || null;
  const height = Number(req.query.height) || null;
  const width = Number(req.query.width) || null;
  const writePathFile = path.join(
    directory +
      fileBaseName +
      (height ? '-h' + height : '') +
      (width ? '-w' + width : '') +
      imageExtension
  );
  const rawImage = path.join(
    __dirname + '../../images/raw-images/' + fileBaseName + imageExtension
  );

  if (!doesFileExist(rawImage)) {
    return res.send('the base image does not exist!');
  }

  if (doesFileExist(writePathFile)) {
    console.log('file exists');
    return res.sendFile(writePathFile);
  } else {
    sharp(rawImage)
      .resize(width, height)
      .toFile(writePathFile, (err, info) => {
        if (err) {
          return err;
        } else {
          console.log('new file created');
          return res.sendFile(writePathFile);
        }
      });
  }
}

export function serveScaledImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const scaledDir = path.join(__dirname + '../../images/thumbnails/scaled/');

  //if a request with just one dimension paramter comes through, the image is scaled and served
  //

  if (req.query.name && (!req.query.height || !req.query.width)) {
    processImage(req, res, scaledDir);
  }
  next();
}

export default serveScaledImage;
