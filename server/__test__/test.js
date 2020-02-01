/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index.js');

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
        expect(resp.body[24].username).toBe('Queenie_Tromp41');
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
