'use strict';
describe('Factory: CategoryFactory', function () {

  beforeEach(module('unearthedApp'));

  //This allows me to test the injected factory.
  var categoryFactory;

  beforeEach(inject(function(CategoryFactory) {
    categoryFactory = CategoryFactory;
  }));

  it('does this work?', function() {
    expect(true).toBe(true);
  });

  it('should have a GET request function', function() {
    expect(categoryFactory.getCategoryList).not.toBe(undefined);
  });

  it('should have a working getCategoryList function', function() {
    expect(categoryFactory.getCategoryList).not.toBe(undefined);
    var test = categoryFactory.getCategoryList();
    expect(typeof test).toBe('object');
  });


});
