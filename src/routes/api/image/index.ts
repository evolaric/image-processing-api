// IMAGE ENDPOINT
// THIS IS WHERE THE MAGIC HAPPENS

import express, { Request, Response, NextFunction } from 'express';
import * as fs from 'fs/promises';
import path from 'path';
import checkQuery from '../../../util/checkQuery';
import serveRawImage from '../../../util/serveRawImage';

const image = express.Router();

function serveScaledImage(req: Request, res: Response, next: NextFunction) {
  //if a request with just one dimension paramter comes through, the image is scaled and served
  if (req.query.name && (!req.query.height || !req.query.width))
    console.log('serveScaledImage');
  next();
}

function serveResizedImage(req: Request, res: Response, next: NextFunction) {
  if (req.query.name && req.query.height && req.query.width)
    console.log('serveResizedImage');
  next();
}

function processImage(req: Request, res: Response, next: NextFunction) {
  console.log('image processing');
}

image.use(checkQuery);
image.use(serveRawImage);
image.use(serveScaledImage);
image.use(serveResizedImage);

image.get('/api/image', (req: Request, res: Response) => {
  res.send(`<h2>The image endpoint</h2>`);
});

export default image;
