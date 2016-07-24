// Home Controller
weatherApp.controller('homeController',['$scope','cityService', function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

// Forecast Controller
weatherApp.controller('forecastController',['$scope','cityService', '$resource', '$routeParams' ,function($scope, cityService, $resource, $routeParams){
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&APPID=a7726b35da74db8db9e62ce5d0ebe7ff", {callback: "JSON_CALLBACK"},
    { get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    };
}]);