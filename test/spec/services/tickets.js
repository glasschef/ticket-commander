'use strict';

describe('Service: Tickets', function () {

  // load the service's module
  beforeEach(module('ticketCommanderApp'));

  // instantiate service
  var Tickets;
  beforeEach(inject(function (_Tickets_) {
    Tickets = _Tickets_;
  }));

  it('should do something', function () {
    expect(!!Tickets).toBe(true);
  });

});
