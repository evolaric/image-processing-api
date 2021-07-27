import { Request, Response, NextFunction } from 'express';
import { checkName, checkRawImage, fileNameOnly, checkDimensions, verifyNumbers, verifyIntegers } from './queryHelpers';
// Checks to see if the URL requested is valid
export function checkQuery(req: Request, res: Response, next: NextFunction): unknown {
  if (!checkName(req)) {
    // if there is no name, send 404
    return res.status(404).json({
      error: '404: File Not Found',
      message: 'URL must contain a valid file name and optional parameters'
    });
  } else if (!checkRawImage(req)) {
    // if base file does not exists, send 404
    return res
      .status(404)
      .json({ error: '404: File Not Found', message: 'Base file does not exist. Check your URL and try again.' });
  } else if (fileNameOnly(req)) {
    // if there is a name with no parameters, send next
    return next();
  } else if (checkDimensions(req)) {
    // if any dimension entered is greater that 2000, send 404
    return res.status(404).json({
      error: '404: File Not Found',
      message: 'Maximum size exceeded.  Largest value accepted is 2000',
      file: req.query.name,
      height: req.query.height,
      width: req.query.width
    });
  } else if (verifyNumbers(req)) {
    // if height or width is not a number but not null, send 404
    return res.status(404).json({
      error: '404: File Not Found',
      message: 'Invalid parameter. Height and width must expressed as positive integers (1)',
      file: req.query.name,
      height: req.query.height,
      width: req.query.width
    });
  } else if (verifyIntegers(req)) {
    return res.status(404).json({
      // if height or width is not a positive interger, send 404
      error: '404: File Not Found',
      message: 'Invalid parameter. Height and width must expressed as positive integers (2)',
      file: req.query.name,
      height: req.query.height,
      width: req.query.width
    });
  }
  next();
}

export default checkQuery;
