angular.module('appModule').component('results', {
	templateUrl : 'app/appModule/results/results.component.html',
	controllerAs : 'vm',
	controller : function(vetService,$scope) {
		var vm = this;
		vm.results = [];
		vm.searchTerm = null;
		vm.active = null;
		
		vm.makeActive = function(result){
			vm.active = result;
		}	
		
		$scope.$on('search-event', function(e,args){
			console.log('scope hit');
			vm.results = args.searchResults;
			vm.active = vm.results[0];
		})
	}
});
