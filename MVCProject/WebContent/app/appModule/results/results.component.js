angular.module('appModule').component('results', {
	templateUrl : 'app/appModule/results/results.component.html',
	controllerAs : 'vm',
	controller : function(vetService,$scope) {
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
		
		$scope.$on('search-event', function(e,args){
			console.log('scope hit');
			vm.results = args.searchResults;
		})
	}
});
