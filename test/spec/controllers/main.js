'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('unearthedApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a hello world test', function () {
    expect(scope.test).toBe('Hello World!');
  });

});
