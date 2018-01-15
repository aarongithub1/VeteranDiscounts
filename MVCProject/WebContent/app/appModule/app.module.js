angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider) {
	
	$routeProvider
	.when('/location/discount', {
		template : '<discount-form></discount-form>'
	})
	.when('/location/discount', {
		template : '<Company-Search-Result></Company-Search-Result>'
	})
	
});
