/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index.js');
// const mongoose = require('mongoose');

describe('Should respond to get requests to an id', () => {
  it('responds with an object of JSON data', (done) => {
    request(app).get('/20').expect('Content-Type', /json/).expect(200)
      .then(() => {
        done();
      });
  });
  it('should respond with the expected username given an id', (done) => {
    request(app).get('/25')
      .then((resp) => {
        expect(resp.body.username).toBe('Gail.Bogan93');
        done();
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          done();
        }
      });
  });
});
