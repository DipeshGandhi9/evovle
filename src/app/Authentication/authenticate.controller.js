/**
 * Created by codevisor1 on 31-Aug-16.
 */
(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('AuthenticateController', AuthenticateController);

  /** @ngInject */
  function AuthenticateController($mdDialog) {
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

  }
})();
