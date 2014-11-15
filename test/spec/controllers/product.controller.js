'use strict';
describe('Controller: ProductCtrl', function () {

  // load the controller's module
  beforeEach(module('unearthedApp'));

  var ProductCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductCtrl = $controller('ProductCtrl', {
      $scope: scope
    });
  }));

  //This allows me to test the injected factory.
  var productFactory;

  beforeEach(inject(function(ProductFactory) {
    productFactory = ProductFactory;
  }));

  it('should have an injected getItem method', function () {
    expect(productFactory.getItem).not.toBe(undefined);
  });

  it('individualItem should be filled with data after function execution', function () {
    expect(scope.individualItem).not.toBe(undefined);
    expect(scope.individualItem.name).toBe(undefined);
    productFactory.getItem().then(function() {
      expect(scope.individualItem.name).not.toBe(undefined); //This might not be doing what I think it's doing.
    });
  });

});
