angular.module('appModule').component('results', {
	templateUrl : 'app/appModule/results/results.component.html',
	controllerAs : 'vm',
	controller : function(vetService,$scope,$rootScope) {
		var vm = this;
		vm.results = [];
		vm.searchTerm = null;
		vm.active = null;
		
		vm.makeActive = function(result){
			vm.active = result;
			$rootScope.$broadcast('activeSelection', vm.active);
		}	
		
		$scope.$on('search-event', function(e,args){
			//console.log('scope hit in results');
			vm.results = args.searchResults;
			vm.makeActive(vm.results[0]);
		})
		
	}
});
