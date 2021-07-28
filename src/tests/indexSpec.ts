import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoint responses', (): void => {
  it('redirects / to /api', () => {
    request.get('/').expect(302);
  });

  it('returns 200 on /api', (): void => {
    request.get('/api').expect(200);
  });

  it('returns 404 on an invalid endpoint', (): void => {
    request.get('/api/image').expect(404);
  });

  it('gets the raw image if passed just a file name', (): void => {
    request.get('/api/image?name=pattern0002.png').expect(200);
  });

  it('returns 404 if dimension parameter cannot eval to number', async (): Promise<void> => {
    await request.get('/api/image?name=pattern0002.png&height=eeee').expect(404);
  });

  it('returns 404 if dimension parameter is not a positive integer', async (): Promise<void> => {
    await request.get('/api/image?name=pattern0003.png&width=-444').expect(404);
  });

  it('gets a scaled image when passed one dimension', async (): Promise<void> => {
    await request.get('/api/image?name=pattern0002.png&height=200').expect(200);
  });

  it('gets a resized image when passed two dimensions', async (): Promise<void> => {
    await request.get('/api/image?name=pattern0003.png&height=200&width=200').expect(200);
  });
});
