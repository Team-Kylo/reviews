const request = require('supertest');
const app = require('../index.js');
const mongoose = require('mongoose');

describe('Should respond to get requests to an id', () => {
  it('responds with an object of JSON data', (done) => {
    return request(app)
      .get('/20')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((resp) => {
        expect(resp.body.username).toEqual("Clint_Dibbert");
        done()
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          done()
        }
      })
  })
})
