'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API Server Test', () => {

    it('Home Page Test', async()=> {
        const res = await request.get('/');
        expect(res.status).toEqual(200)
    })

    it('Square of Num Test ', async()=> {
        const res = await request.get('/square?num=2');
        expect(res.status).toEqual(200)
        expect(res.text).toEqual('{\"Squared_Number\":4}')

    })

    it('Error Handler Test', async()=> {
        const res = await request.get('/square');
        expect(res.status).toEqual(500)

    })

})