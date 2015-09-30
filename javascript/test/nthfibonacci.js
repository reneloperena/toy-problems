var chai = require('chai'),
fibonacci = require('../src/nthfibonacci');

chai.should();

describe('Obtain nth fibonacci function', function() {
    it('0th fibonacci number should equal 0', function(){
        fibonacci(0).should.equal(0);
    });
    it('20th fibonacci number should equal 6765', function(){
        fibonacci(20).should.equal(6765);
    });
    it('the nth fibonacci number of any negative value should equal to null', function(){
        fibonacci(-10).should.equal(null);
    });
    it('should be able to compute big numbers', function(){
        fibonacci(260).should.equal(971183874599339129547649988289594072811608739584170445);
    });
});