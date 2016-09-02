(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state, $mdDialog,$document) {
    var vm = this;

    if($state.$current)
      vm.stateParam = $state.$current.name;

    vm.showLoginModel = function($event) {
      $mdDialog.show({
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: 'app/login/login.html',
        parent: angular.element($document[0].body),
        targetEvent: $event,
        clickOutsideToClose:true,
        fullscreen: false // Only for -xs, -sm breakpoints.
      })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
    };

    vm.showSignUpModal = function($event){
      $mdDialog.show({
        controller: 'NewAccountController',
        controllerAs: 'vm',
        templateUrl: 'app/newaccount/newAccount.html',
        parent: angular.element($document[0].body),
        targetEvent: $event,
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
