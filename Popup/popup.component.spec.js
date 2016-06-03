'use strict';

describe('popup', function() {

  beforeEach(module('popUp'));

  describe('popup', function() {

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('services/registration-error.json').respond(error_msg);

      ctrl = $componentController('popUp');
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.errors).toEqual({});

      $httpBackend.flush();
      expect(ctrl.errors).toEqual(error_msg);
    });

  });

});
