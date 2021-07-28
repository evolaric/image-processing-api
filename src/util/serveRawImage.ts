import { Request, Response, NextFunction } from 'express';

// if a request comes through with just a file name, serves a raw image
export function serveRawImage(req: Request, res: Response, next: NextFunction): unknown {
  const fullUrl = String(req.protocol + '://' + req.get('host') + req.originalUrl);
  const lengthCheck = fullUrl.substring(fullUrl.indexOf('.') + 1).length;

  if (req.query.name && !req.query.height && !req.query.width) {
    if (lengthCheck < 4) {
      return res.status(200).sendFile(res.locals.rawImagePath);
    } else {
      return res.status(404).json({
        error: '404: File Not Found',
        message: 'The request must be for a raw image. Remove characters after the image file extension and try again.'
      });
    }
  }
  next();
}

export default serveRawImage;
