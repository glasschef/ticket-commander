(function() {
  'use strict';

  angular
    .module('ticketCommander')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;
    vm.baller = "hi";

    vm.tickets = getTickets();
    
    
    function getTickets() {
      vm.tickets = [];
      
      vm.tickets[0] = "hi";
      vm.tickets[1] = "hi";
      vm.tickets[2] = "hi";
      vm.tickets[3] = "hi";

      angular.forEach(vm.tickets, function(ticket) {
	      alert(ticket);
      });
    }
  }
})();
