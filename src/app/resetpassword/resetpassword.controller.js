/**
 * Created by codevisor1 on 01-Sep-16.
 */
(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('ResetPasswordController', ResetPasswordController);

  /** @ngInject */
  function ResetPasswordController($mdDialog) {
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
