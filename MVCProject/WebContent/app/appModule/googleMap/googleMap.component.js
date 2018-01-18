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
		vm.displayDetails = null;
		vm.origin = null;
		vm.destination = null;

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
			$rootScope.$broadcast('origin', {
				origin : vm.pos
			});
      	})

		$scope.$on('search-event', function(e,args){
			vm.results = args.searchResults;
			vm.updateMarkers();
			console.log(vm.results);
		})


		vm.updateMarkers = function() {
			vm.markers = [];
			var counter = 0;
			vm.results.forEach(function(item) {
				vm.markers.push({
					lat : item.address.lat,
					lng : item.address.longitude,
					id : counter,
					name : item.company.name,
					street : item.address.street,
					city : item.address.city
				})
				counter++;
			})
			vm.mapOptions.markers = vm.markers;
			console.log(vm.mapOptions.markers);
		}

		vm.showDetail = function(e, thisMark) {
			if (vm.displayDetails) {
				vm.map.hideInfoWindow(vm.displayDetails.id.toString())
			}
			vm.displayDetails = thisMark;
			vm.origin = vm.pos.lat + ',' + vm.pos.lng;
			vm.destination = thisMark.lat + ',' + thisMark.lng;
			vm.map.showInfoWindow(thisMark.id.toString(), (thisMark.id).toString())
		}


	}
});
