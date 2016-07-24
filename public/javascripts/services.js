// Services
weatherApp.service('cityService',function(){
    this.city = "New York, NY";

});

// Weather Services
weatherApp.service('weatherService', ['$resource',function($resource){
    this.getWeather = function(city, days){
         var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&APPID=a7726b35da74db8db9e62ce5d0ebe7ff", {callback: "JSON_CALLBACK"},
    { get: {method: "JSONP"}});

    return weatherAPI.get({ q: city, cnt: days });
    };
}]);