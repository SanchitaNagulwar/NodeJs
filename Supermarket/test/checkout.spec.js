// Test Case1 : Can create an instance of the checkout calss
const Checkout = require('../test/checkout.js');

var expect = require('chai').expect;

it('can instantiate checkout', function(){
    var checkout = new Checkout();
});

it('can add item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a',1);
});

it('can add item ', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a',1);
    checkout.addItem('a');
});