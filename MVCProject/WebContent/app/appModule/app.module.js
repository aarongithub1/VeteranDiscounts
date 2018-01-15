angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider) {
	
	$routeProvider
	.when('/location/discount', {
		template : '<discount-form></discount-form>'
	})
	.when('/register', {
			template : '<register></register>'
		})
	.when('/login', {
			template : '<login></login>'
		})
		
	.when('/redirect',{
		template:'<redirect></redirect>'
	})

	.when('/location/discount', {
		template : '<company-search-result></company-search-result>'
	})
	

});
