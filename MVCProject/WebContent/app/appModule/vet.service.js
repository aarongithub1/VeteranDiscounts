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

	// search navbar
	service.search = function(searchTerm){
		if(searchTerm.trim()===null ||searchTerm.trim()===""){
			return $http({
				method : 'GET',
				url : 'rest/location'
			});
		}

		return $http({
			method : 'GET',
			url : 'rest/location/search/' + searchTerm
		});
	}

	// search company
	service.searchCompany = function(searchCompany){
		return $http({
			method : 'GET',
			url : 'rest/company/search/' + searchCompany
		});
	}
	
	//create discount
	service.createDiscount = function(discount, uid, lid) {
		var user = checkLogin();

		return $http({
			method : 'POST',
			url : 'rest/' + uid + '/discount/location/' + lid,
			headers : {
		        'Content-Type' : 'application/json'
		     },
		     data : discount
		})
	};

	service.createCompany = function(company) {
		return $http({
			method : 'POST',
			url : 'rest/company',
			headers : {
		        'Content-Type' : 'application/json'
		     },
			data : company
		});
	};

	service.createLocation = function(location, companyId, addressId) {
		return $http({
			method : 'POST',
			url : 'rest/location/' + companyId + '/' + addressId,
			headers : {
		        'Content-Type' : 'application/json'
		     },
			data : location
		})
	};

	service.createAddress = function(address) {
		return $http({
			method : 'POST',
			url : 'rest/address',
			headers : {
		        'Content-Type' : 'application/json'
		     },
			data : address
		});
	};

	//distance between two points
	service.distance = function(origin,destination) {
		var parsedOrigin = origin.split(' ').join('+');
		var parsedDestination = destination.split(' ').join('+');
		//maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=518+West+14th+Street+Houston+TX&destinations=12411+Wedgehill+Lane+Houston+TX
		return $http({
			method : 'GET',
			url : 'maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + parsedOrigin +'&destinations=' + parsedDestination + '&key=AIzaSyC23b9B6TuJDmGsOOJCGimRY0sJMcD4MK8',
			headers : {
		        'Content-Type' : 'application/json'
		      }
		})
	};




	return service;
})
