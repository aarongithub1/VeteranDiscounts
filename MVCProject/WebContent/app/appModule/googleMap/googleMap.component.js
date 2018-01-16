angular.module('appModule').component('googleMap', {
	templateUrl : 'app/appModule/googleMap/googleMap.component.html',
	controllerAs : 'vm',
	controller : function($scope, $window) {
		var vm = this;

		vm.getPosition = function() {
			//get the user's position
		}

		var position = vm.getPosition();

		console.log($scope.pos);

	}
});
// var map, pos;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 10
//   });
//
//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
// 	 pos = {
// 	   lat: position.coords.latitude,
// 	   lng: position.coords.longitude
// 	 };
//
// 	 map.setCenter(pos);
// 	 marker = new google.maps.Marker({
// 		 position : pos,
// 		 map : map
// 	 })
//     }, function() {
// 	 handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
// 				    'Error: The Geolocation service failed.' :
// 				    'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }
