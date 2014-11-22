'use strict';
describe('Factory: CategoryFactory', function () {

  beforeEach(module('unearthedApp'));

  //This allows me to test the injected factory.
  var categoryFactory;

  beforeEach(inject(function(CategoryFactory) {
    categoryFactory = CategoryFactory;
  }));

  it('should have a getCategoryList function', function() {
    expect(categoryFactory.getCategoryList).not.toBe(undefined);
  });

  it('should have a working getCategoryList function that integrates with the server', function() {
    expect(categoryFactory.getCategoryList).not.toBe(undefined);
    var test = categoryFactory.getCategoryList();
    expect(typeof test).toBe('object');
  });

});
