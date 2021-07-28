import { Request, Response, NextFunction } from 'express';
import processImage from './processImage';
import doesFileExist from './doesFileExist';

export async function serveImage(req: Request, res: Response, next: NextFunction): Promise<void> {
  if (doesFileExist(res.locals.finalFilePath)) {
    console.log('file does exist');
    res.sendFile(res.locals.finalFilePath);
    return;
  } else {
    res.sendFile(
      await processImage(res.locals.rawImagePath, res.locals.height, res.locals.width, res.locals.finalFilePath)
    );
    return;
  }
  next();
}

export default serveImage;
