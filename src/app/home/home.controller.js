(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state, $mdDialog) {
    var vm = this;

    if($state.$current)
      vm.stateParam = $state.$current.name;

    vm.showLoginModel = function(ev) {
      $mdDialog.show({
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: 'app/login/login.html',
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
    };


  }
})();
