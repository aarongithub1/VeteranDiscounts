angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService, authService, $rootScope, $location) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']
		vm.searchTerm = "";
		vm.selected = null;
		vm.typeArr = [];
		
			
		vm.loadTypes = function(){
			vetService.allTypes().then(function(res){
				vm.typeArr = res.data;
			});
		}
		vm.loadTypes();
		
		vm.checkLogin = function() {
			//console.log(authService.getToken().id);
			if(authService.getToken().id) {
				return true;
			}
			return false;
		}
		
		vm.search = function(type,distance) {
			vetService.searchWithFilters(vm.searchTerm,type,distance).then(function(response) {
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
