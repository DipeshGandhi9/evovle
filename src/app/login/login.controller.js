(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $mdDialog) {
    var vm = this;

    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };


  }
})();
