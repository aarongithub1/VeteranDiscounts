angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService, authService, $rootScope, $location, $filter) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']
		vm.searchTerm = "";
		vm.selected = null;
		vm.typeArr = [];
		vm.results = [];
		
			
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
		
		vm.typeFilter = function(typeId){
			vm.results = $filter('typeFilter')(vm.results,typeId);
		}
		
		vm.search = function(typeId,distance) {
			vetService.search(vm.searchTerm).then(function(response) {
				vm.results = response.data;
				//console.log(vm.results);
				if(!isNaN(typeId)){
					vm.typeFilter(typeId);
				}
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
