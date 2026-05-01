import request from 'supertest';
import { type Express } from 'express';
import app from '../../app';

// { word: 'backend', counts: { source: 2, target: 2 }, match: true }

describe('/postwp', () => {
  //   let appTest: Express;
  //   beforeAll(() => {
  //     appTest = app;
  //   });

  it('should return an array of objects containing the matchComparison schema', async () => {
    const response = await request(app)
      .post('/postws')
      .send({ source: 'The backend is on', target: 'The backend is on', honeypot: '' });
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([
      {
        word: 'backend',
        counts: { source: 1, target: 1 },
        match: true,
      },
    ]);
  });

  it('should return an error object when honeypot is filled out', async () => {
    const response = await request(app).post('/postws').send({
      source: 'The backend is on',
      target: 'The backend is on',
      honeypot: 'let me into your db',
    });
    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({ error: 'Invalid Submission' });
  });

  it('should return an error if there is a missing field', async () => {
    const response = await request(app)
      .post('/postws')
      .send({ source: 'The backend is on', honeypot: '' });
    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({
      error: 'Invalid Data',
    });
  });

  it('should return an error if one of the fields is empty', async () => {
    const response = await request(app)
      .post('/postws')
      .send({ source: 'The backend is on', target: '', honeypot: '' });
    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({ error: 'Invalid Data' });
  });
});
