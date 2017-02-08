var assert = require('assert');
var basket = require('../basket');
var customer = require('../customer');
var items = require('../items');
var percentageDiscount = require('../percentageDiscount');

describe('10percent', function() {

  it('should take 10 percent off when over 20', function(){
    basket.empty();
    basket.price = 0;
    basket.add(items[2]);
    basket.add(items[2]);
    basket.add(items[2]);
    basket.checkDeal(percentageDiscount);
    assert.equal(27, basket.price);
  });


})