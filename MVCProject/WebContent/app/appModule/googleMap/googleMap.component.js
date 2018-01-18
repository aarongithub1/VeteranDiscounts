angular.module('appModule').component('googleMap', {
	templateUrl : 'app/appModule/googleMap/googleMap.component.html',
	controllerAs : 'vm',
	controller : function($timeout, geolocator, $scope, $rootScope, NgMap) {
		var vm = this;
		vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDhVMJxcZGC4H1OSLiRbyrRgyZwbpJ7XYs';
		vm.mapOptions = null;
		vm.pos = null;
		vm.results = null;
		vm.markers = [];
		vm.origin = null;
		vm.destination = null;
		vm.selectedLocation = null;

		NgMap.getMap().then(function(map) {
    			vm.map = map;
  		});

		geolocator.geolocate().then(function(position){
        		vm.mapOptions = {
              		center: position,
              		markers : [],
              		zoom: 11
          	}
			vm.pos = position;
        		$scope.$apply();
			vm.broadcastOrigin();
      	})

		vm.broadcastOrigin = function() {
			console.log('broadcasting origin');
			$rootScope.$broadcast('origin', {
				origin : vm.pos
			});
		}
		$scope.$on('search-event', function(e,args){
			console.log('search hit');
			vm.results = args.searchResults;
			vm.updateMarkers();
		})


		vm.updateMarkers = function() {
			vm.markers = [];
			var counter = 0;
			vm.results.forEach(function(item) {
				item.markerId = counter;
				vm.markers.push(item)
				counter++;
			})
			vm.mapOptions.markers = vm.markers;
		}

		$scope.$on('activeSelection', function(e,arg){
			//console.log('scope hit in discount');
			vm.selectedLocation = arg.activeSelection;
		});



	}
});
