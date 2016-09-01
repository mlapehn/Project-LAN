// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.
 angular.module('LocalLan')
  .controller('addCtrl', addCtrl)


addCtrl.$inject = ["$scope", "$http", "$routeParams"];
function addCtrl($scope, $http, $routeParams){

    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields
    $scope.createEvent = function() {
      console.log("Hello")

        // Grabs all of the text box fields
        var eventData = {
            name: $scope.formData.name,
            url: $scope.formData.url,
        };

        // Saves the user data to the db
        $http.post('/api/events', eventData)
            .success(function (data) {

                // Once complete, clear the form
                $scope.formData.name = "";
                $scope.formData.url = "";
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.getAllEvents = function ($scope, $http){
    $scope.hello = "wine index controller is working!";
      $http.get('http://localhost:3000/api/events')
        .then(function(response){
         $scope.events = response.data;
         console.log($scope.events);
        });
     }
      $scope.getEvent = function ($scope, $http, $routeParams){
       $http.get('http://localhost:3000/api/events/' + $routeParams.name)
         .then(function(response) {
             $scope.event = response.data;
             console.log($scope.event);
         });
       }
      //  function createEvent($scope, $http, $routeParams) {
      //      $http.post('http://localhost:3000/api/events/', newEvent);
      //          console.log(newEvent);
      //  }

};
