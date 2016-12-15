(function() {
  'use strict';

  angular
    .module('shop')
    .controller('weatherController', function (weatherFactory, city){

      let vm = this;

      vm.location = city.location;
        

    });

})();