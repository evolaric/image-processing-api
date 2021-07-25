import fs from 'fs';

//Helper function to check if a file exists and returns a boolean
export function doesFileExist(path: string): boolean {
  try {
    const stat = fs.statSync(path);
    return stat.isFile() as boolean;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
}

export default doesFileExist;
