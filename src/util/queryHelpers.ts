import { Request } from 'express';
import garbageCheck from './garbageCheck';
import doesFileExist from './doesFileExist';
import path from 'path';

function checkName(req: Request): boolean {
  if (req.query.name) {
    return true;
  } else {
    return false;
  }
}

function checkRawImage(req: Request): boolean {
  const rawImageDirectory = path.join(__dirname + '../../images/raw-images/');
  const baseFileName = String(req.query.name);
  if (doesFileExist(path.join(rawImageDirectory + baseFileName))) {
    console.log(path.join(rawImageDirectory + baseFileName));
    return true;
  } else {
    console.log(path.join(rawImageDirectory + baseFileName));
    return false;
  }
}

function fileNameOnly(req: Request): boolean {
  if (req.query.name && !req.query.width && !req.query.height) {
    return true;
  } else {
    return false;
  }
}

function checkDimensions(req: Request): boolean {
  if (Number(req.query.height) > 2000 || Number(req.query.width) > 2000) {
    return true;
  } else {
    return false;
  }
}

function verifyNumbers(req: Request): boolean {
  if ((!Number(req.query.height) && req.query.height) || (!Number(req.query.width) && req.query.width)) {
    return true;
  } else {
    return false;
  }
}

function verifyIntegers(req: Request): boolean {
  if (garbageCheck(Number(req.query.height) || null) || garbageCheck(Number(req.query.width) || null)) {
    return true;
  } else {
    return false;
  }
}

export { checkName, checkRawImage, fileNameOnly, checkDimensions, verifyNumbers, verifyIntegers };
