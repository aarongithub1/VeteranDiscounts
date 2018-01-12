angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService,$rootScope) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']
		vm.searchTerm = "";
		
		vm.search = function() {
			vetService.search(vm.searchTerm).then(function(response) {
				console.log(response.data);
				$rootScope.$broadcast('search-event',{
					searchResults : response.data
				})
			});
		}
	}
});
