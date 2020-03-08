const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');

const config = require('../config/config.json');

chai.use(chaiHttp);

const baseUrl = config.development.baseUrl || 'http://localhost';
const port = config.port || 3000;
const url = `${baseUrl}:${port}`;

describe('Basic(/) route', () => {
    it('should return status 200', (done) => {
        chai.request(url)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
});