(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, $state) {
    var vm = this;

    $scope.account;
    $scope.stateParam;
    $scope.accounts = ['Live:35101(mBTC 2400)', 'Live:34120(mBTC 2400)', 'Demo:50001(mBTC 2400)', 'Demo:5000(mBTC 2400)'];

    if($state.$current)
      $scope.stateParam = $state.$current.name;

  }
})();
