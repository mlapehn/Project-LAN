// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.

function eventsCtrl($scope, $http, $routeParams) {

    var vm = this;
    vm.param = {
        events: []
    };


    var getAllEvents = function () {
        $http.get('http://localhost:3000/api/events')
            .then(function (response) {
                vm.param.events = response.data;
            });
    };

    var init = function () {
        getAllEvents();
    };

    init();
}


angular.module('LocalLan')
    .controller('eventsController', ["$scope", "$http", "$routeParams", eventsCtrl]);
