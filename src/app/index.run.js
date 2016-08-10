(function() {
  'use strict';

  angular
    .module('evolve')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
