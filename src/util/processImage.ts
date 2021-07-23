import { Request, Response, NextFunction } from 'express';

// This File is where Sharp will be invoked

export function processImage(req: Request, res: Response, next: NextFunction) {
  console.log('image processing');
}

export default processImage;
