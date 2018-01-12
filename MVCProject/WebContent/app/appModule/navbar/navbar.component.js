angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']
		vm.searchTerm = "";
		
		vm.search = function() {
			vetService.search(vm.searchTerm).then(function(data) {
				console.log(data.data);
			});
		}
	}
});
