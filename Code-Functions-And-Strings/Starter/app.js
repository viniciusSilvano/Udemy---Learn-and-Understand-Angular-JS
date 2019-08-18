var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation){
    return 'Jane Doe'
}

console.log(searchPeople(1,2,3,4,5))