var customers = require('../customer');
var assert = require('assert');

describe('customer', function(){

  it('should check no loyalty card', function(){
    assert.equal(false, customers[0].loyalty);
  })

  it('should use loyalty card', function(){
    assert.equal(true, customers[1].loyalty);
  });
});