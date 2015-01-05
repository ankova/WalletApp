'use strict';

// Declare app level module which depends on views, and components
angular.module('walletApp', [
    'ngRoute',
    'viewSource',
    'helperModule'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/home",
            {
                controller:"walletCtrl",
                templateUrl: "home/home.html"
            })
            .otherwise({redirectTo: '/home'});
    }])
    .controller('walletCtrl', ['addRemoveData', 'getData', 'reset', '$scope', function(addRemoveData, getData, reset, $scope){
        $scope = {
            added: getData("added") || [],
            removed: getData("removed") || [],
            total: getData("total") || 0,
            add: addRemoveData.add,
            remove: addRemoveData.remove,
            reset: reset
        };
        return $scope;
    }]);
