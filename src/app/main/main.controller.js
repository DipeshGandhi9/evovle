(function() {
  'use strict';

  angular
    .module('evolve')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $state, $log) {
    var vm = this;

    vm.account;
    vm.stateParam;
    vm.accounts = ['Live:35101(mBTC 2400)', 'Live:34120(mBTC 2400)', 'Demo:50001(mBTC 2400)', 'Demo:5000(mBTC 2400)'];

    if($state.$current)
      vm.stateParam = $state.$current.name;


    vm.selected = [];

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    //function success(desserts) {
    //  $scope.desserts = desserts;
    //}
    //
    //$scope.getDesserts = function () {
    //  $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
    //};
    vm.liveAccountList = [{
      "id": "35103",
      "name": "live mbtc",
      "type": "classic",
      "leverage": "1:300",
      "trades": { "value": 24.0 },
      "pending_orders": { "value": 4.0 },
      "Open_order": { "value": 87.0 },
      "balance": { "value": 1.0 }
      },
      {
        "id": "35117",
        "name": "Matic Kocevar",
        "type": "classic",
        "leverage": "1:300",
        "trades": { "value": 24.0 },
        "pending_orders": { "value": 4.0 },
        "Open_order": { "value": 87.0 },
        "balance": { "value": 1.0 }
      }
    ]

    vm.openAccount = function(selectedAccount){
       //console.log(selectedAccount.id + "clicked!!");
      $log.debug("Table row Click ", selectedAccount.id);
    }
  }
})();
