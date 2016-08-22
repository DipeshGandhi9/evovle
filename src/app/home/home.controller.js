(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state) {
    var vm = this;

    if($state.$current)
      vm.stateParam = $state.$current.name;

  }
})();
