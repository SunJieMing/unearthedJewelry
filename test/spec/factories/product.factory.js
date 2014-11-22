'use strict';
describe('Factory: ProductFactory', function () {

  beforeEach(module('unearthedApp'));

  //This allows me to test the injected factory.
  var productFactory;

  beforeEach(inject(function(ProductFactory) {
    productFactory = ProductFactory;
  }));

  it('should have a getItem function', function() {
    expect(productFactory.getItem).not.toBe(undefined);
  });

  it('should have a working getItem function that integrates with the server', function() {
    expect(productFactory.getItem).not.toBe(undefined);
    var test = productFactory.getItem();
    expect(typeof test).toBe('object');
  });

});
