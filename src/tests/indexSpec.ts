import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test basic endpoint', () => {
  it('should be listening', async () => {
    await request.get('/').expect(200);
  });
});
