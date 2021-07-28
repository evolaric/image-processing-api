import { Request, Response } from 'express';
import processImage from './processImage';
import doesFileExist from './doesFileExist';

export async function serveImage(_req: Request, res: Response): Promise<void> {
  if (doesFileExist(res.locals.finalFilePath)) {
    res.sendFile(res.locals.finalFilePath);
    return;
  } else {
    res.sendFile(
      await processImage(res.locals.rawImagePath, res.locals.height, res.locals.width, res.locals.finalFilePath)
    );
    return;
  }
}

export default serveImage;
