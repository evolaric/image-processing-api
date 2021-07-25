import { Request, Response } from 'express';
import doesFileExist from './doesFileExist';
import path from 'path';
import sharp from 'sharp';

export function processImage(req: Request, res: Response, directory: string): unknown {
  const fileName = String(req.query.name);
  const fileBaseName = fileName.substr(0, fileName.lastIndexOf('.'));
  const imageExtension = path.extname(fileName) || null;
  const height = Number(req.query.height) || null;
  const width = Number(req.query.width) || null;
  const writePathFile = path.join(
    directory + fileBaseName + (height ? '-h' + height : '') + (width ? '-w' + width : '') + imageExtension
  );
  const rawImage = path.join(__dirname + '../../images/raw-images/' + fileBaseName + imageExtension);

  // if the base image does not exist, sends an error 404
  if (!doesFileExist(rawImage)) {
    return res
      .status(404)
      .json({ error: '404: File Not Found', message: 'Base file does not exist. Check your URL and try again.' });
  }

  // sends modified file if it exists, otherwise calls sharp and sends the new file
  if (doesFileExist(writePathFile)) {
    console.log('file exists');
    return res.sendFile(writePathFile);
  } else {
    sharp(rawImage)
      .resize(width, height)
      .toFile(writePathFile, (err) => {
        if (err) {
          // returns a 500 error is the call to sharp is badly malformed
          return res.status(500).json({
            error: '500: Server Error',
            message: 'image cannot be processed with provided parameters.  Check your URL and try again.'
          });
        } else {
          // returns the newly processed image
          console.log('new file created');
          return res.sendFile(writePathFile);
        }
      });
  }
}

export default processImage;
