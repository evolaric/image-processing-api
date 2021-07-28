import processImage from '../../util/processImage';
import doesFileExist from '../../util/doesFileExist';
import path from 'path';
import fs from 'fs';
describe('Image Processing (sharp)', (): void => {
  describe('Image Resizing', (): void => {
    const baseImage = path.join(__dirname + '../../../images/raw-images/image0001.jpg');
    const targetImage = path.join(__dirname + '../../../images/thumbnails/resized/image0001-h333-w333.jpg');
    const height = 333;
    const width = 333;

    beforeEach(async function (): Promise<void> {
      if (doesFileExist(targetImage)) {
        fs.unlink(targetImage, (err) => {
          if (err) console.log(err);
          else {
            return;
          }
        });
      }
    });

    it('creates a new resized image from a base image', async (): Promise<void> => {
      await processImage(baseImage, height, width, targetImage);
      expect(targetImage).toBeTruthy();
    });
  });

  describe('Image Scaling', (): void => {
    const baseImage = path.join(__dirname + '../../../images/raw-images/image0001.jpg');
    const targetImage = path.join(__dirname + '../../../images/thumbnails/scaled/image0001-h333.jpg');
    const height = 333;
    const width = null;

    beforeEach(async function (): Promise<void> {
      if (doesFileExist(targetImage)) {
        fs.unlink(targetImage, (err) => {
          if (err) console.log(err);
          else {
            return;
          }
        });
      }
    });

    it('creates a new scaled image from a base image', async (): Promise<void> => {
      await processImage(baseImage, height, width, targetImage);
      expect(targetImage).toBeTruthy();
    });
  });
});
