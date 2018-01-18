angular.module('appModule').component('myLocations', {
	templateUrl : 'app/appModule/userProfile/myLocations.component.html',
	controllerAs : 'vm',
	controller : function(authService,vetService,$rootScope) {
		var vm = this;
		vm.results = [];
		vm.active = null;
		
		
		var reload = function(){vetService.getLocationsbyUid().then(function(res){
			vm.results = res.data;
		  }).catch(function(error){
			  console.log(error);
		  });
		};
		reload();
		
		vm.makeActive = function(result){
			vm.active = result;
			$rootScope.$broadcast('activeSelection', vm.active);
		}
		
		vm.deleteLocation = function(location){
			vetService.deleteLocation(location).then(reload);
		}
		
		
		
	}
});