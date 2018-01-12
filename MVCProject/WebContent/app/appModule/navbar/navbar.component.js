angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService) {
		var vm = this;
		vm.distances = ['3', '5', '10', '10+']

		vm.search = function(params) {
			vetService.search(params).then(function(data) {

			});
		}
	}
});
