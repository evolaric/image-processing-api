import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

export function doDirectoriesExist(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  const base = path.join(__dirname + '../../images/');
  const thumbnails = path.join(__dirname + '../../images/thumbnails');
  const scaled = path.join(__dirname + '../../images/thumbnails/scaled');
  const resized = path.join(__dirname + '../../images/thumbnails/resized');

  const directories = [base, thumbnails, scaled, resized];

  directories.forEach((path) => {
    try {
      const stat = fs.statSync(path);
      return stat.isDirectory();
    } catch (err) {
      if (err.code === 'ENOENT') {
        //make the directory
        console.log('creating ' + path);
        fs.mkdirSync(path);
        return;
      }
      throw err;
    }
  });
  next();
}

export default doDirectoriesExist;
