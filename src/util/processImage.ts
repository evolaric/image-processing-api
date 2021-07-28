import sharp from 'sharp';

export async function processImage(
  rawImage: string,
  height: number,
  width: number,
  finalFilePath: string
): Promise<string> {
  return new Promise((resolve) => {
    sharp(rawImage)
      .resize(width, height)
      .toFile(finalFilePath)
      .then(() => {
        return resolve(finalFilePath);
      })
      .catch((err) => {
        return resolve(err);
      });
  });
}

export default processImage;
