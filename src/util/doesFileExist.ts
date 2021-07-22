import fs from 'fs';

export function doesFileExist(path: string) {
  try {
    const stat = fs.statSync(path);
    return stat.isFile();
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
}

export default doesFileExist;
