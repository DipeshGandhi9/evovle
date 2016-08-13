(function() {
  'use strict';

  angular
    .module('evolve')
    .directive('asmeSideMenu', asmeSideMenu);

  /** @ngInject */
  function asmeSideMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sideMenu/sideMenu.html',
      scope: {
        creationDate: '='
      },
      controller: SideMenuController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SideMenuController(moment, $scope, toastr) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      $scope.clickMe = function(value){
        toastr.info('You Clicked ' + value);
      }
    }
  }

})();
