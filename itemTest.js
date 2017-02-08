var items = require('../items');
var assert = require('assert');

describe('item', function(){
  it('should have a name', function(){
    assert.equal("Milk", items[0].name);
  })


})