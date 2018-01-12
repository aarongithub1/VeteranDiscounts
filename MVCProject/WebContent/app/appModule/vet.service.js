angular.module('appModule').factory('vetService', function($http) {
	var service = {};

	// login Auth
	var checkLogin = function() {
		var user = authService.getToken();
		if(!user.id) {
			$location.path('/login')
			return;
		}
		return user;
	}

	// index
	service.index = function() {
        return $http({
            method : 'GET',
            url : 'rest/location'
        });
    }

	// search
	service.search = function(searchTerm){
		return $http({
			method : 'GET',
			url : 'rest/location/search/' + searchTerm
		});
	}

	//create discount
	service.create = function(discount) {
		var user = checkLogin();

		return $http({
			method : 'POST',
			url : 'rest/location/discount' + user.id,
			headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : discount
		})
	};

	//distance between two points
	service.distance = function(origin,destination) {
		var parsedOrigin = origin.split(' ').join('+');
		var parsedDestination = destination.split(' ').join('+');
		//maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=518+West+14th+Street+Houston+TX&destinations=12411+Wedgehill+Lane+Houston+TX
		return $http({
			method : 'GET',
			url : 'maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + parsedOrigin +'&destinations=' + parsedDestination + '&key=AIzaSyC23b9B6TuJDmGsOOJCGimRY0sJMcD4MK8'

			headers : {
		        'Content-Type' : 'application/json'
		      }
		})
	};




	return service;
})
