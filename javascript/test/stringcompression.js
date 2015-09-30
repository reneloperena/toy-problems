var chai = require('chai'),
stringCompression = require('../src/stringcompression');

chai.should();

describe('Implement a method to perform basic string compression using counts of repeated characters', function() {
    describe('Should compress repeated letters to the letter and the count', function(){
        it('the compressed result of \'aaaaaa\' should be \'a6\'' , function(){
            stringCompression('aaaaaa').should.equal('a6');
        });
        it('the compressed result of \'aaabbb\' should be \'a3b3\'' , function(){
            stringCompression('aaabbb').should.equal('a3b3');
        });
        it('the compressed result of \'aabbcccddddd\' should be \'a2b2c3d5\'' , function(){
            stringCompression('aabbcccddddd').should.equal('a2b2c3d5');
        });
        it('the compressed result of \'aabbaaaa\' should be \'a2b2a4\'' , function(){
            stringCompression('aabbaaaa').should.equal('a2b2a4');
        });
    });
    it('If the compressed string is longer than the original string, should return original', function(){
        stringCompression('abcde').should.equal('abcde');
    });
});