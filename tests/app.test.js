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
    .expect(200)
  });
});

describe('signup page', () => {
  test('shows posts page', () => {
    return request(app)
    .get('/sign-up')
    .expect(200)
  });
});

describe('acebook login page', () => {
  test('shows log in', () => {
    return request(app)
    .get('/login')
    .expect(200)
  });
});

describe('edit posts', () => {
  test('shows one post to edit', () => {
    return request(app)
    .get('/post-edit')
    .expect(200)
  });
});

afterAll(() => {
server.close();
});
