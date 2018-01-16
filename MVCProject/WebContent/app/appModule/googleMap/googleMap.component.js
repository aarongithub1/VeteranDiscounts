angular.module('appModule').component('googleMap', {
	templateUrl : 'app/appModule/googleMap/googleMap.component.html',
	controllerAs : 'vm',
	controller : function($timeout, geolocator, $scope) {
		var vm = this;
		vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDhVMJxcZGC4H1OSLiRbyrRgyZwbpJ7XYs';
		vm.mapOptions = null;
		vm.pos = null;

		geolocator.geolocate().then(function(position){
        		vm.mapOptions = {
              		center: position,
              		markers : [position],
              		zoom: 8
          	}
        		$scope.$apply();
      	})
	}
});
