(function() {
  'use strict';

  angular
    .module('evolve')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $scope, $state) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      $scope.stateParam;

      if($state.$current)
        $scope.stateParam = " - " + $state.$current.name;

      $scope.goTo = function(route){
        $state.go(route);
      };
    }
  }

})();
