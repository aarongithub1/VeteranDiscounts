angular.module('authModule').factory('authService', function($http, $cookies, $location) {
	var service = {};
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	// CHANGE THE ROUTES
	service.getToken = function() {
		var user = {};
		user.id = $cookies.get('uid');
		return user;
	}

	var saveToken = function(user) {
		$cookies.put('uid', user.id);
		$cookies.put('email', user.email);
	}

	service.register = function(user) {
		return $http({
			method : 'POST',
			url : 'api/auth/register',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : user
		}).then(function(response) {
			saveToken(response.data);
			$location.path('/todos');
		})
	}

	var removeToken = function() {
		$cookies.remove('uid');
		$cookies.remove('email');
	}

	service.login = function(user) {
		return $http({
			method : 'POST',
			url : 'api/auth/login',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : user
		}).then(function(response) {
			saveToken(response.data);
			$location.path('/todos');
		})
	}

	service.logout = function() {
		return $http({
			method : 'POST',
			url : 'api/auth/logout'
		}).then(function(response) {
			removeToken();
			$location.path('/login');
		})
	}

	return service;
});
