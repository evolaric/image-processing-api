import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { networkInterfaces } from 'os';
import path from 'path';
import shell from 'shelljs';

export function getRawImages(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  const repo = 'git clone https://github.com/evolaric/raw-images.git';
  const rawimages = path.join(__dirname + '../../images/raw-images');
  const targetPath = path.join(__dirname + '../../images');

  try {
    const stat = fs.statSync(rawimages);
    stat.isDirectory();
    next();
  } catch (err) {
    if (err.code === 'ENOENT') {
      shell.cd(targetPath);
      shell.exec(repo);
      console.log('retrieved raw images');
      return next();
    }
    throw err;
  }
}

export default getRawImages;
