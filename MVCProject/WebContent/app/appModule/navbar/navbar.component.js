angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService, authService, $rootScope, $location) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']
		vm.searchTerm = "";
		vm.selected = null;
		
		vm.checkLogin = function() {
			//console.log(authService.getToken().id);
			if(authService.getToken().id) {
				return true;
			}
			return false;
		}
		
		vm.search = function() {
			vetService.search(vm.searchTerm).then(function(response) {
				//console.log(response.data);
				$rootScope.$broadcast('search-event',{
					searchResults : response.data
				})
			});
		}
		
		vm.createDiscount = function() {
			$location.path('/company/discount')
		}
		
	}
});
