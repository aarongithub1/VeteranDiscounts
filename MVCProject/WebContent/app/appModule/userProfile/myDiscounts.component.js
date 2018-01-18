angular.module('appModule').component('myDiscounts', {
	templateUrl : 'app/appModule/userProfile/myDiscounts.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService) {
		var vm = this;
		vm.results = [];
		
		vetService.index().then(function(res){
			vm.results = res.data;
		  }).catch(function(error){
			  console.log(error);
		  });
	}
});