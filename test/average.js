var should = require('should');
var average = require('../lib/average');

describe('#average', function(){
    it('should return the average of array', function(done){
        var avg = average([1, 2, 3, 4]);
        avg.should.equal(2.5);
        done();
    })

    it('should return NaN when array is empty', function(done){
        var avg = average([]);
        isNaN(avg).should.be.true;
        done();
    })
})
