angular.module('appModule').component('googleMap', {
	templateUrl : 'app/appModule/googleMap/googleMap.component.html',
	controllerAs : 'vm',
	controller : function() {
		var vm = this;

		vm.getPosition = function() {
			//get the user's position
		}

		var position = vm.getPosition();
	}
});
