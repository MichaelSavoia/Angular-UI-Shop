(function() {

  angular
    .module('shop')
    .controller('singleItem', function (itemData,$state,$stateParams){

      let vm = this;

      let id = $stateParams.id;
      alert(id);
      vm.singleItem = itemData.getSingleItem(id);
      console.log(vm.singleItem)


    });

})();