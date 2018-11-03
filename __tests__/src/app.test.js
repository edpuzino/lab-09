'use strict';

const {server} = require('../../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).notToBe(defined);
      });

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/api/v1/notes/12')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).notToBe(defined);
      });

  });


  it('should be able to post to /api/v1/notes', () => {

    let obj = {title:'test',text:'foo'};

    return mockRequest
      .post('/api/v1/:model')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.title).toEqual(obj.title);
      })
      .catch(err => {
        expect(err);
      });

  });
  
  it('should respond properly on request to /api/v1/notes', () => {

    return mockRequest
      .get('/api/v1/:model')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        expect(err);
      });

  });

});
