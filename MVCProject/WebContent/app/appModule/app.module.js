angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider) {
	
	$routeProvider
	.when('/location/discount', {
		template : '<discount-form></discount-form>'
	})
	.when('/location/discount', {
		template : '<company-search-result></company-search-result>'
	})
	
});
