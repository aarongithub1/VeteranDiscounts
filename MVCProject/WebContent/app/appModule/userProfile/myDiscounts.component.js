angular.module('appModule').component('myDiscounts', {
	templateUrl : 'app/appModule/userProfile/myDiscounts.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService) {
		var vm = this;
		vm.results = [];
		
		vetService.index().then(function(res){
			vm.results = res.data;
			console.log(vm.results);
			vm.makeActive(vm.results[0]);
		  }).catch(function(error){
			  console.log(error);
		  });
	}