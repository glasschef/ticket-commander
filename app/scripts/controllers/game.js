'use strict';

/**
 * @ngdoc function
 * @name ticketCommanderApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticketCommanderApp
 */
angular.module('ticketCommanderApp')
    .controller('GameCtrl', ['$scope','Tickets', function ($scope, Tickets) {

  $scope.search_string = "type:ticket status:open assignee:glass@getchef.com";
  $scope.search = Tickets.search($scope.search_string).query();

  $scope.date = new Date();

$scope.untilSLA = function(time){
    var timeleft = new Date() - Date.parse(time);
    return timeleft;
  }


  $scope.analyze = function(ticket){
      var timeSinceUpdate = new Date() - Date.parse(ticket.updated_at);
      
      var ticketSeverity = $.grep(ticket.fields, function(e){ return e.id == '22476674'; })[0].value;
      var supportLevel =  $.grep(ticket.fields, function(e){ return e.id == '22759000'; })[0].value;
      var linkedIssue =  $.grep(ticket.fields, function(e){ return e.id == '24270646'; })[0].value;
      
      var SLAtime = 0;
      switch(ticketSeverity){
        case "severity_1":
          if (supportLevel == "premium")
            SLAtime = 1800000;
          else if (supportLevel == "standard")
            SLAtime = 3600000;
          else
            SLAtime = 1210000000;
          break;
        case "severity_2":
          if (supportLevel == "premium")
            SLAtime = 3600000;
          else if (supportLevel == "standard")
            SLAtime = 10800000;
          else
            SLAtime = 1210000000;
          break;
        case "severity_3":
          if (supportLevel == "premium")
            SLAtime = 10800000;
          else if (supportLevel == "standard")
            SLAtime = 86400000;
          else
            SLAtime = 1210000000;
          break;
        case "severity_4":
          if (supportLevel == "premium")
            SLAtime = 1210000000;
          else if (supportLevel == "standard")
            SLAtime = 1210000000;
          else
            SLAtime = 1210000000;
            break;
        default:
      }

      var timeleft = SLAtime-timeSinceUpdate;
  //    if (timeleft < 0) timeleft=0;
      var analysis = {
        timeLeft: timeleft,
        supportLevel: supportLevel,
        ticketSeverity: ticketSeverity

      }
      return analysis;
    }


  $scope.getColumn = function(numColumns){
      var col = (Math.floor((Math.random() * numColumns) ))*40;
      return col;
    }

    }]);
angular.module('ticketCommanderApp').filter('debug', function() {
  return function(input) {
    if (input === '') return 'empty string';
    return input ? input : ('' + input);
  };
});


angular.module('ticketCommanderApp').directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function () {
                return {
                    'height': (newValue.h - 100) + 'px',
                        'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})
