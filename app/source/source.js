'use strict';

angular.module('viewSource', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/source', {
    templateUrl: 'source/source.html',
    controller: 'SourceCtrl'
  });
}])

.controller('SourceCtrl', [function() {

}]);