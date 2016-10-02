var should = require('should');
var min = require('../lib/min');

describe('#min', function(){
    it('should return the minimum in array', function(done){
        var minimum = min([1, 10, 100, 1000]);
        minimum.should.equal(1);
        done();
    })

    it('should return undefined when array is empty', function(done){
        var minimum = min([]);
        (minimum === undefined).should.be.true;
        done();
    })
})
