const app = require('../app')
// afterEach(() => app.close())
const request = require('supertest');

describe('acebook index page', () => {
  test('shows index page', () => {
    return request(app)
    .get('/')
    .expect(200)
    .end()
  })
})

describe('acebook posts page', () => {
  test('shows posts page', () => {
    return request(app)
    .get('/posts')
    .expect(200)
  })
})