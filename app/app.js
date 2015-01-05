'use strict';

// Declare app level module which depends on views, and components
var walletApp = angular.module('walletApp', [
    'ngRoute'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/home",
            {
                controller:"walletCtrl",
                templateUrl: "home/home.html"
            })
            .otherwise({redirectTo: '/home'});
    }])
    .controller('walletCtrl', ['$scope', function($scope){
        $scope.added = [];
        $scope.removed = [];
        $scope.total=0;
        $scope.add = function(value){

        };
        $scope.remove = function(value){

        };
        $scope.reset = function(){

        };
        return $scope;
    }]);
