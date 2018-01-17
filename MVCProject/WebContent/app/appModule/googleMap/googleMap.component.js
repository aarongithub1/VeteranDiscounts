angular.module('appModule').component('googleMap', {
	templateUrl : 'app/appModule/googleMap/googleMap.component.html',
	controllerAs : 'vm',
	controller : function($timeout, geolocator, $scope) {
		var vm = this;
		vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDhVMJxcZGC4H1OSLiRbyrRgyZwbpJ7XYs';
		vm.mapOptions = null;
		vm.pos = null;
		vm.results = null;
		vm.markers = [];

		geolocator.geolocate().then(function(position){
        		vm.mapOptions = {
              		center: position,
              		markers : [position],
              		zoom: 8
          	}
        		$scope.$apply();
      	})

		$scope.$on('search-event', function(e,args){
			vm.results = args.searchResults;
			console.log(vm.results);
		})

	}
});
