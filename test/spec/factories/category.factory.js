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


});
