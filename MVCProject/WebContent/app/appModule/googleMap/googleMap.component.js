angular.module('appModule').component('googleMap', {
	templateUrl : 'app/appModule/googleMap/googleMap.component.html',
	controllerAs : 'vm',
	controller : function($timeout, geolocator, $scope, $rootScope, NgMap, $filter) {
		var vm = this;
		vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDhVMJxcZGC4H1OSLiRbyrRgyZwbpJ7XYs';
		vm.mapOptions = null;
		vm.pos = null;
		vm.results = null;
		vm.markers = [];
		vm.origin = null;
		vm.destination = null;
		vm.selectedLocation = null;
		vm.distance = 3;

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
			$rootScope.$broadcast('origin', {
				origin : vm.pos
			});
		}
		$scope.$on('search-event', function(e,args){
			vm.results = args.searchResults;
			vm.distance = args.distance;
			vm.updateMarkers();
		})


		vm.updateMarkers = function() {
			vm.distanceFilter()
			vm.markers = [];
			var counter = 0;
			vm.results.forEach(function(item) {
				item.markerId = counter;
				vm.markers.push(item)
				counter++;
			})
			vm.mapOptions.markers = vm.markers;
		}

		vm.showDetail = function(event, markerId) {
			vm.mapOptions.markers.forEach(function(mark) {
				if (mark.id === markerId) {
					vm.selectedLocation = mark;
				}
			})
			vm.origin = vm.pos.lat + ',' + vm.pos.lng;
			vm.destination = vm.selectedLocation.address.lat + ',' + vm.selectedLocation.address.longitude;
			vm.map.showInfoWindow('info', this);
		}

		vm.distanceFilter = function() {
			vm.results = $filter('distanceFilter')(vm.results, vm.distance)
		}

		$scope.$on('activeSelection', function(e,arg){
			vm.selectedLocation = arg;
			vm.showDetail(null, vm.selectedLocation);
		});



	}
});
