angular.module('appModule').factory('vetService', function($http) {
	var service = {};
	
	service.index = function() {
        return $http({
            method : 'GET',
            url : 'rest/location'
        });
    }
	
	return service;
})
