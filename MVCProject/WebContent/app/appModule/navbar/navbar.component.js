angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService, authService, $rootScope, $location, $filter,$scope) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']
		vm.searchTerm = "";
		vm.selected = null;
		vm.typeArr = [];
		vm.results = [];
		vm.typeId = 0;
		vm.distance = vm.distances[0];
			
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
		
		vm.typeFilter = function(){
			vm.results = $filter('typeFilter')(vm.results,vm.typeId);
		}
		
		vm.search = function() {
			vetService.search(vm.searchTerm).then(function(response) {
				vm.results = response.data;
				vm.typeFilter();
				//console.log(vm.results);
				vm.broadcast();
			});
		}
		
		
		vm.broadcast = function(){
			$rootScope.$broadcast('search-event',{
				searchResults : vm.results
			})
		}
		
		vm.createDiscount = function() {
			$location.path('/company/discount')
		}
		
	}
});
