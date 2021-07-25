import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import shell from 'shelljs';

// Checks to see if the raw images exist, and clones them from github if needed
export function getRawImages(_req: Request, _res: Response, next: NextFunction): unknown {
  const repo = 'git clone https://github.com/evolaric/raw-images.git && cd raw-images && rm LICENSE && rm README.md';
  const rawimages = path.join(__dirname + '../../images/raw-images');
  const targetPath = path.join(__dirname + '../../images');

  try {
    const stat = fs.statSync(rawimages);
    stat.isDirectory();
    return next();
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
