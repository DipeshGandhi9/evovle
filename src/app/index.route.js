(function() {
  'use strict';

  angular
    .module('evolve')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('deposit', {
        url: "/deposit",
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('withdraw', {
        url: "/withdraw",
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('settings', {
        url: "/settings",
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
