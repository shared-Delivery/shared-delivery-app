const servicesRouter = require('.././routes/services.router.js');
const request = require('supertest');

describe('GET /:id', () => {
  test('Should respond with status 200', async () => {
    const response = await request(servicesRouter).get('/:id').send();
    expect(response.status).toBe(200);
  });
});
