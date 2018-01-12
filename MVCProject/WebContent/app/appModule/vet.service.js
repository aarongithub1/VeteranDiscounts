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


	return service;
})
