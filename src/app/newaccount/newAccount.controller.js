/**
 * Created by codevisor1 on 01-Sep-16.
 */
(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('NewAccountController', NewAccountController);

  /** @ngInject */
  function NewAccountController($mdDialog,$document) {
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

    vm.showLoginModel = function(ev) {
      $mdDialog.show({
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: 'app/login/login.html',
        parent: angular.element($document[0].body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false // Only for -xs, -sm breakpoints.
      })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
    };

  }
})();
