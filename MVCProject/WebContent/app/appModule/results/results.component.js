angular.module('appModule').component('results', {
	templateUrl : 'app/appModule/results/results.component.html',
	controllerAs : 'vm',
	controller : function(vetService) {
		var vm = this;
		vm.results = [];
		reload();
		
		function reload(){
			  vetService.index().then(function(res){
				  vm.results = res.data;
			  }).catch(function(error){
				  console.log(error);
			  });
		  }
	}
});
