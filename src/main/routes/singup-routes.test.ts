import request from 'supertest'
import app from '../config/app'

describe('SingUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/v1/signup')
      .send({
        name: 'Marco',
        email: 'marcotuliocandeo@outlook.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
