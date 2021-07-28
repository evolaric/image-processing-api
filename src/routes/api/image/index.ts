import express, { Request, Response } from 'express';
import checkQuery from '../../../util/checkQuery';
import setLocals from '../../../util/setLocals';
import serveRawImage from '../../../util/serveRawImage';
import serveImage from '../../../util/serveImage';

const image = express.Router();
image.use(checkQuery);
image.use(setLocals);
image.use(serveRawImage);
image.use(serveImage);

// endpoint for diplaying, resizing, and scaling images
image.get('/api/image', (req: Request, res: Response): void => {
  //THIS SHOULD NEVER DISPLAY
  res.send(`<h2>The image endpoint</h2>`);
});

export default image;
