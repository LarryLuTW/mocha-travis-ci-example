var should = require('should');
var max = require('../lib/max');

describe('#max', function(){
    it('should return the maximum in array', function(done){
        var maximum = max([1, 10, 100, 1000]);
        maximum.should.equal(1000);
        done();
    })

    it('should return undefined when array is empty', function(done){
        var maximum = max([]);
        (maximum === undefined).should.be.true;
        done();
    })
})
