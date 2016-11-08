(function() {

  angular
    .module('shop')
    .controller('shopController', function (itemData){

      let vm = this;


      vm.items = itemData.getData();


    });

})();