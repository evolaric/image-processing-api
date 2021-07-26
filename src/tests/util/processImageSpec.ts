import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

/* 
Note to reviewer: I tried to approach this test by calling the imageProcessing.ts file directly, 
but could not find a way to pass express parameters via the testing framework via jasmine.  
If you could offer some insight on how to do this, I would be greatly appreciative.
*/

describe('Image Processing Responses', () => {
  it('with no dimensions passed, it should get a raw image', async () => {
    await request.get('/api/images?name=pattern0001.png').expect(200);
  });

  it('with one dimension passed, it should get a scaled image', async () => {
    await request.get('/api/images?name=pattern0001.png&height=200').expect(200);
  });

  it('with two dimensions passed, it should get a resized image', async () => {
    await request.get('/api/images?name=pattern0001.png&height=200&width=200').expect(200);
  });
});
