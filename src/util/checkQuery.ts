import { Request, Response, NextFunction } from 'express';
import garbageCheck from './garbageCheck';

// Checks to see if the URL requested is valid
export function checkQuery(req: Request, res: Response, next: NextFunction): unknown {
  if (!req.query.name) {
    // if there is no name, send 404
    return res.status(404).json({
      error: '404: File Not Found',
      message: 'URL must contain a valid file name and optional parameters'
    });
  } else if (req.query.name && !req.query.width && !req.query.height) {
    // if there is a name with no parameters, send next
    return next();
  } else if (Number(req.query.height) > 2000 || Number(req.query.width) > 2000) {
    // if any dimension entered is greater that 2000, send 404
    return res.status(404).json({
      error: '404: File Not Found',
      message: 'Maximum size exceeded.  Largest value accepted is 2000',
      file: req.query.name,
      height: req.query.height,
      width: req.query.width
    });
  } else if ((!Number(req.query.height) && req.query.height) || (!Number(req.query.width) && req.query.width)) {
    // if height or width is not a number but not null, send 404
    return res.status(404).json({
      error: '404: File Not Found',
      message: 'Invalid parameter. Height and width must expressed as positive integers 1',
      file: req.query.name,
      height: req.query.height,
      width: req.query.width
    });
  } else if (garbageCheck(Number(req.query.height) || null) || garbageCheck(Number(req.query.width) || null)) {
    return res.status(404).json({
      // if height or width is not a positive interger, send 404
      error: '404: File Not Found',
      message: 'Invalid parameter. Height and width must expressed as positive integers 2',
      file: req.query.name,
      height: req.query.height,
      width: req.query.width
    });
  }
  next();
}

export default checkQuery;
