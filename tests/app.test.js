const { app, server } = require('../app');
// afterEach(() => app.close())
const request = require('supertest');
const connectionFactory = require('mongoose');

describe('acebook index page', () => {
  test('shows index page', () => {
    return request(app)
    .get('/')
    .expect(200)
  });
});

describe('acebook posts page', () => {
  test('shows posts page', () => {
    return request(app)
    .get('/posts')
    .expect(302)
  });
});

afterAll(() => {
server.close();
});
