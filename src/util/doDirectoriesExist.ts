import fs from 'fs';
import path from 'path';

export function doDirectoriesExist() {
  const thumbnails = path.join(__dirname + '../../images/thumbnails');
  const scaled = path.join(__dirname + '../../images/thumbnails/scaled');
  const resized = path.join(__dirname + '../../images/thumbnails/resized');

  const directories = [thumbnails, scaled, resized];

  directories.forEach((path) => {
    try {
      const stat = fs.statSync(path);
      return stat.isDirectory();
    } catch (err) {
      if (err.code === 'ENOENT') {
        //make the directories
        console.log('directory does not exist');
        fs.mkdirSync(path);
        return;
      }
      throw err;
    }
  });
}

export default doDirectoriesExist;
