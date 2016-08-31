(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($mdDialog) {
    var vm = this;

    vm.hide = function() {
      $mdDialog.hide();
    };
    vm.cancel = function() {
      $mdDialog.cancel();
    };
    vm.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    vm.authenticate = function(ev) {
      vm.hide();
      $mdDialog.show({
        controller: 'AuthenticateController',
        controllerAs: 'vm',
        templateUrl: 'app/authentication/authenticate.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false // Only for -xs, -sm breakpoints.
      })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
    }



  }
})();
