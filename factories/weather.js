(function() {
    'use strict';

    angular
        .module('shop')
        .factory("weatherFactory", function($http) {

        const getCurrentWeather = function(city)
        {
            let call = $http({
                method: 'GET',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
            });

            alert('test')

            return call;
        };


        return{
            getCurrentWeather,
        }
    });

})();