/**
 * Created by Fernando on 19/12/2016.
 */
var should = require('chai').should(),
    nodelog = require('../index'),
    log = nodelog.log,
    warn = nodelog.warn,
    error = nodelog.error;

describe('#log', function () {
    it('log message', function () {
        log('message').should.equal(true);
    });
});

describe('#warn', function () {
    it('warn message', function () {
        warn('message').should.equal(true);
    });
});

describe('#error', function () {
    it('error message', function () {
        error('message').should.equal(true);
    });
});