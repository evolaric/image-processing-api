import express, { Request, Response } from 'express';
import checkQuery from '../../../util/checkQuery';
import serveRawImage from '../../../util/serveRawImage';
import serveResizedImage from '../../../util/serveResizedImage';
import serveScaledImage from '../../../util/serveScaledImage';

const image = express.Router();
image.use(checkQuery);
image.use(serveRawImage);
image.use(serveScaledImage);
image.use(serveResizedImage);

// endpoint for diplaying, resizing, and scaling images
image.get('/api/image', (req: Request, res: Response) => {
  res.send(`<h2>The image endpoint</h2>`);
});

export default image;
