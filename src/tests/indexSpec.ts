import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoint responses', () => {
  it('should redirect / to /api', async () => {
    await request.get('/').expect(302);
  });

  it('should should return 200 on /api', async () => {
    await request.get('/api').expect(200);
  });

  it('should should return 404 on an invalid endpoint', async () => {
    await request.get('/api/image').expect(404);
  });
});
