angular.module('appModule').component('myCompanies', {
	templateUrl : 'app/appModule/userProfile/myCompanies.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService) {
		var vm = this;
		vm.results = [];
		vm.active = null;
		
		vetService.company().then(function(res){
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
