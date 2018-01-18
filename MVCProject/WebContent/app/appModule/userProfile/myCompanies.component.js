angular.module('appModule').component('myCompanies', {
	templateUrl : 'app/appModule/userProfile/myCompanies.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService) {
		var vm = this;
		vm.results = [];
		
		vetService.company().then(function(res){
			vm.results = res.data;
		  }).catch(function(error){
			  console.log(error);
		  });
	}
});
