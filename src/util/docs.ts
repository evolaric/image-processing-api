export const docs = {
  title: 'Image processing api documentation',
  raw: {
    parameter: {
      name: {
        expects: 'string',
        behavior: 'Sending a request with only a valid file name will serve the raw image',
        example: 'http://localhost:3000/api/image?name=pattern0001.png'
      }
    }
  },
  scaling: {
    parameters: {
      dimensions: {
        height: {
          expects: 'string',
          units: 'pixels',
          behavior:
            'Sending a request with only a name and height parameter will serve the image with the width scaled to the provided height.',
          cropping: 'false',
          example: 'http://localhost:3000/api/image?name=pattern0001.png&height=400'
        },
        width: {
          expects: 'string',
          units: 'pixels',
          behavior:
            'Sending a request with only a name and width parameter will serve the image with the height scaled to the provided width.',
          cropping: 'false',
          example: 'http://localhost:3000/api/image?name=pattern0002.png&width=400'
        }
      }
    }
  },
  resizing: {
    parameters: 'name, height and width',
    expects: 'strings',
    units: 'pixels',
    behavior:
      'Sending a request with a name, height, and width will serve the image cropped and resized to the provided dimensions',
    cropping: 'true',
    example: 'http://localhost:3000/api/image?name=pattern0003.png&width=400&height=300'
  }
};
export default docs;
