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

describe('Controller: CarouselDemoCtrl', function () {

  beforeEach(module('unearthedApp'));

  var MainCtrl,
  scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('CarouselDemoCtrl', {
      $scope: scope
    });
  }));

  it('interval should be initialized to 5000ms', function() {
    expect(scope.myInterval).toBe(5000);
  });

  it('should have a method addSlide', function() {
    expect(scope.addSlide).not.toBe(undefined);
  });

  it('carousel array should have a length of three', function() {
    expect(scope.slides.length).toBe(3);
  });

  it('first carousel image is not properly set', function() {
    var firstItem = scope.slides[0];
    expect(firstItem.image).toBe('images/homepage.png');
    expect(firstItem.title).toBe('DZI BEAD BRACELETS');
    expect(firstItem.description).toBe('The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India.');
  });

});
