angular.module('appModule').component('myDiscounts', {
	templateUrl : 'app/appModule/userProfile/myDiscounts.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService) {
		var vm = this;
		vm.results = [];
		vm.active = null;
		
		vetService.getDiscountsByUid().then(function(res){
			vm.results = res.data;
			vm.makeActive(vm.results[0]);
		  }).catch(function(error){
			  console.log(error);
		  });
		
		vm.makeActive = function(result){
			vm.active = result;
			$rootScope.$broadcast('activeSelection', vm.active);
		}
	}
});