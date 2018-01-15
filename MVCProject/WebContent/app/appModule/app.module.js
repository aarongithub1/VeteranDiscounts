angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider) {
	
	$routeProvider
	.when('/company/discount', {
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
	

});
