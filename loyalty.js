var assert = require('assert');
var loyalty = require('../loyalty');
// var customer = require('../customer');
var items = require('../items');
var basket = require('../basket');

describe('Five percent for loyalty card', function(){
  it('should reduce total by five percent with loyalty card', function(){;
    basket.empty();
    basket.price = 0;
    basket.loyalty = true;
    basket.add(items[2]);
    basket.checkDeal(loyalty);
    assert.equal(9.50, basket.price);
  });
});