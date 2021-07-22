// IMAGE ENDPOINT
// THIS IS WHERE THE MAGIC HAPPENS

import express, { Request, Response, NextFunction } from 'express';
import * as fs from 'fs/promises';
import path from 'path';
import checkQuery from '../../../util/checkQuery';
import serveRawImage from '../../../util/serveRawImage';

const image = express.Router();

image.use(checkQuery);
image.use(serveRawImage);

image.get('/api/image', (req, res) => {
  res.send(`<h2>The image endpoint</h2>`);
});

export default image;
