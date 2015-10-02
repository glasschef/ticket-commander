(function() {
  'use strict';

  angular
    .module('ticketCommander')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
