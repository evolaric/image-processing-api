import path from 'path';

function deconstructFileName(file: string): string[] {
  const fileBaseName = file.substr(0, file.lastIndexOf('.'));
  const fileExtension = path.extname(file);
  const rawImagePath = path.join(__dirname + '../../images/raw-images/' + fileBaseName + fileExtension);
  return [fileBaseName, fileExtension, rawImagePath];
}
function setDestination(height: number, width: number): string {
  if (!height || !width) {
    const scaledDir = path.join(__dirname + '../../images/thumbnails/scaled/');
    return scaledDir;
  } else {
    const resizedDir = path.join(__dirname + '../../images/thumbnails/resized/');
    return resizedDir;
  }
}
function setFilePath(
  fileBaseName: string,
  fileExtension: string,
  height: number,
  width: number,
  directory: string
): string {
  const finalFilePath = path.join(
    directory + fileBaseName + (height ? '-h' + height : '') + (width ? '-w' + width : '') + fileExtension
  );
  return finalFilePath;
}

export { deconstructFileName, setDestination, setFilePath };
