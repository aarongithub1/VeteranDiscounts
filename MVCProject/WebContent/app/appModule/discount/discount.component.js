angular.module('appModule').component('discount', {
	templateUrl : 'app/appModule/discount/discount.component.html',
	controllerAs : 'vm',
	controller : function($scope) {
		var vm = this;
		vm.location = null;
		
		
		$scope.$on('activeSelection', function(e,arg){
			//console.log('scope hit in discount');
			//console.log(arg);
			vm.location = arg;
		});
		
	}
});
