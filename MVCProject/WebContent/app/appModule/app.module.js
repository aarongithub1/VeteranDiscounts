angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider) {
	
	$routeProvider
	.when('/location/discount', {
		template : '<discount-form></discount-form>'
	})
	
});
