const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');

const config = require('../config/config.json');

chai.use(chaiHttp);

const baseUrl = config.development.baseUrl || 'http://localhost';
const port = config.port || 3000;
const url = `${baseUrl}:${port}`;

/** Basic route */
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

/** /escape-rooms route */
describe('escape rooms(/escape-rooms) route', () => {
    it('should return status 200', (done) => {
        chai.request(url)
        .get('/escape-rooms')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });

    it('should return atleast 5 escape rooms after migration', (done) => {
        chai.request(url)
        .get('/escape-rooms')
        .end((err, res) => {
            expect(res.body.data).to.have.lengthOf.at.least(5);
            done();
        });
    });

    it('escape room 1 should have a maxPlayerCount of 6', (done) => {
        chai.request(url)
        .get('/escape-rooms')
        .end((err, res) => {
            expect(res.body.data[0].maxPlayerCount).to.equal(6);
            done();
        });
    });

    it('escape room 3 should have a minimumPlayerAge of 16', (done) => {
        chai.request(url)
        .get('/escape-rooms')
        .end((err, res) => {
            expect(res.body.data[2].minimumPlayerAge).to.equal(16);
            done();
        });
    });

    it('escape room 1 should have a playTime of 120', (done) => {
        chai.request(url)
        .get('/escape-rooms')
        .end((err, res) => {
            expect(res.body.data[4].playTime).to.equal(120);
            done();
        });
    });
});

/** /order-options route */
describe('Order options(/order-options) route', () => {
    it('should return status 200 (get)', (done) => {
        chai.request(url)
        .get('/order-options')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
});