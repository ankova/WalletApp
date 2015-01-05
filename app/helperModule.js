/**
 * Created by Aneta on 05/01/2015.
 */

angular.module("helperModule", [])
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
        return {
            add: function(value){
                var added = {
                    value: 0,
                    date: []
                };

                added.value = value;
                added.date = new Date();
                this.added.push(added);
                this.total += value;

                storeData("added", this.added);
                storeData("total", this.total);
            },
            remove: function(value){
                var removed = {
                    value: 0,
                    date: []
                };

                this.total -= value;
                removed.value = value;
                removed.date = new Date();
                this.removed.push(removed);
                storeData("removed", this.removed);
                storeData("total", this.total);
            }
        }
    }])
    .factory('reset', [function(){
        return function(){
            sessionStorage.clear();
            this.added = [];
            this.removed = [];
            this.total = 0;
        };
    }]);