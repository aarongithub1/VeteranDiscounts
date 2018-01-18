angular.module('appModule').component('myLocations', {
	templateUrl : 'app/appModule/userProfile/myLocations.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService,$rootScope) {
		var vm = this;
		vm.results = [];
		vm.active = null;
		
		vetService.index().then(function(res){
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