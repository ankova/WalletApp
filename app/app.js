'use strict';

// Declare app level module which depends on views, and components
var walletApp = angular.module('walletApp', [
    'ngRoute',
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/home",
            {
                controller:"walletCtrl",
                templateUrl: "home/home.html"
            })
            .otherwise({redirectTo: '/home'});
    }])
    .factory("storeData", [function(){
        return function(key, value){
            var value = angular.toJson(value);
            sessionStorage.setItem(key, value);
        };
    }])
    .factory("getData", [function(){
        return function(key){
            var data = sessionStorage.getItem(key);
            return angular.fromJson(data);
        };
    }])
    .factory('addRemoveData', ['storeData', function(storeData){
        var added = {
                value: 0,
                date: []
            },
            removed = {
                value: 0,
                date: []
            };
        return {
            add: function(value){
                added.value = value;
                added.date = new Date();
                this.added.push(added);
                this.total += value;

                storeData("added", this.added);
                storeData("total", this.total);
            },
            remove: function(value){
                this.total -= value;
                removed.value = value;
                removed.date = new Date();
                this.removed.push(removed);
                storeData("removed", this.removed);
                storeData("total", this.total);
            }
        }
    }])
    .factory('reset', function(){
        return function(){
            sessionStorage.clear();
            this.added = [];
            this.removed = [];
            this.total = 0;
        };
    })
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
