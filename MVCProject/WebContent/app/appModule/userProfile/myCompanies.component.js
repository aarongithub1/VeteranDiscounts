angular.module('appModule').component('myCompanies', {
	templateUrl : 'app/appModule/userProfile/myCompanies.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService) {
		var vm = this;
		vm.results = [];
		
		vetService.companybyUid().then(function(res){
			vm.results = res.data;
			console.log(vm.results);
		  }).catch(function(error){
			  console.log(error);
		  });
	}
});
