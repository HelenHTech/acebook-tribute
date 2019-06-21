const app = require('../app')
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
    .end()
  })
})

test('teardown', t => {
  app.close()
  mongoose.connection.close()
  t.end() 
})