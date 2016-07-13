var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('./../../src/part1/cart-summary');

describe('CartSummary', function(){
 it('getSubtotal() harusnya return 0 kalo gak ada item dicartnya', function(){
  var chartSummary = new CartSummary({});
  expect(cartSummary.getSubtotal()).to.equal(0);
 }
}
