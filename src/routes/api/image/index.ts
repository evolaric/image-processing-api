// IMAGE ENDPOINT
// THIS IS WHERE THE MAGIC HAPPENS

import express, { Request, Response } from 'express';
import * as fs from 'fs/promises';
import path from 'path';
import checkQuery from '../../../util/checkQuery';
import serveRawImage from '../../../util/serveRawImage';
import serveResizedImage from '../../../util/serveResizedImage';
import serveScaledImage from '../../../util/serveScaledImage';

const image = express.Router();

image.use(checkQuery);
image.use(serveRawImage);
image.use(serveScaledImage);
image.use(serveResizedImage);

image.get('/api/image', (req: Request, res: Response) => {
  res.send(`<h2>The image endpoint</h2>`);
});

export default image;
