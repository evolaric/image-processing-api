import { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';

function doesFileExist(path: string, file: string) {
  console.log(path, file)
}

export function serveRawImag
const imageDir = __dirname + '../images/raw_images';
  const imagePath = 
  if (req.query.name && !req.query.height && !req.query.width) {
    //first, see if the file exists as named, and if so, serve the raw file

    return res.send('this will serve the raw image');
  }
  next();
}

export default serveRawImage;
