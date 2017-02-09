'use strict';

require('../lib');
const should = attract('should');


it('Basic string', done => {

    should('test').be.a.String();
    done();
});
