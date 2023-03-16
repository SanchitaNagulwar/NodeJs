// Mocha 'beforeEach' and 'afterEach'

const { expect } = require("chai");

// var expect = require('chai').expect;

// describe('test_suite',function(){
//     beforeEach(function(){
//         console.log('beforeEach');

//     }); 
//     it('returns true', function(){
//         expect(true).to.equals(true);
//     });

//     this.afterEach(function(){
//         console.log('afterEach');
//     });
// // });

describe('test_suite',function(){
    before(function(){
        console.log('Before tests');
    });

    it( 'returns true', function(){
        expect(true).to.equals(true);
    });

    after(function(){
        console.log('After tests');
    });
});