// Test Case1 : Can create an instance of the checkout class
const Checkout = require('../test/checkout.js');

var expect = require('chai').expect;
var checkout;

beforeEach(function(){
     checkout = new Checkout();
});

it('can instantiate checkout', function(){
});

it('can add item price', function(){
    checkout.addItemPrice('a',1);
});

it('can add item ', function(){
    checkout.addItemPrice('a',1);
    checkout.addItem('a'); 
});

it('can calculate the current total', function(){
    checkout.addItemPrice('a',1);
    checkout.addItem('a'); 
    expect(checkout.calculateTotal()).to.equal(1);

});

it('can add multiple items and get correct total', function(){
    checkout.addItemPrice('a',1);
    checkout.addItemPrice('b',2);
    checkout.addItem('a'); 
    checkout.addItem('b'); 
    expect(checkout.calculateTotal()).to.equal(3);


    it('Can add discount rule', function(){
        checkout.addDiscount('a',3,2);
        checkout.addItem('a');
        checkout.addItem('a');
        checkout.addItem('a');
        expect(checkout.calculateTotal()).to.equal(2);
    });


    it('Throws when item added with no price', function(){
        expect(function(){checkout.addItem('c')}).to.throw();})

});