(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $state) {
    var vm = this;

    vm.account;
    vm.stateParam;
    vm.accounts = ['Live:35101(mBTC 2400)', 'Live:34120(mBTC 2400)', 'Demo:50001(mBTC 2400)', 'Demo:5000(mBTC 2400)'];

    if($state.$current)
      vm.stateParam = $state.$current.name;

  }
})();
