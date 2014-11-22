'use strict';

describe('Controller: CategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('unearthedApp'));

  var CategoryCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoryCtrl = $controller('CategoryCtrl', {
      $scope: scope
    });
  }));

  //This allows me to test the injected factory.
  var categoryFactory;

  beforeEach(inject(function(CategoryFactory) {
    categoryFactory = CategoryFactory;
  }));

  it('should have a getCategoryList method', function () {
    expect(categoryFactory.getCategoryList).not.toBe(undefined);
  });

  it('should update categoryList after making API call', function() {
    expect(Object.keys(scope.categoryList).length).toBe(0);
    categoryFactory.getCategoryList().then(function(data){
      scope.categoryList = data;
      expect(Object.keys(scope.categoryList).length).not.toBe(0);
    });
  });

  it('categoryFactory should be defined', function() {
    expect(categoryFactory).not.toBe(undefined);
  });

});
