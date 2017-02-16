'use strict';


require('../lib')();
const [fs, should] = attract('fs', 'should');

it('Basic string', done => {

    fs.readFile('./test/test.txt', (error, data) => {
        should(data.toString()).be.a.String();
        done();
    });
});