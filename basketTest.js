var basket = require('../basket');
var items = require('../items');
var assert = require('assert');


describe('basket', function(){
  
  it("should start empty", function(){
    assert.equal(0, basket.itemCount());
  });

  it("should add new items", function(){
    basket.add(items[0]);
    assert.equal(1, basket.itemCount());
  });

  it("should remove items", function(){
    basket.remove(items[0]);
    assert.equal(0, basket.itemCount());
  });

  it("should empty basket", function(){
    basket.add(items[0]);
    basket.empty();
    assert.equal(0, basket.itemCount());
  })

  it("should track total value", function(){
    basket.add(items[0]);
    basket.add(items[2]);
    assert.equal(11, basket.checkTotal());
  })

});