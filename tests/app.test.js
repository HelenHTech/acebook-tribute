const app = require('../app')
const request = require('supertest');

describe('acebook index page', () => {
  test('shows index page', () => {
    return request(app)
    .get('/')
    .expect(200)
  })
})

describe('acebook posts page', () => {
  test('shows posts page', () => {
    return request(app)
    .get('/posts')
    .expect(200)
  })
})