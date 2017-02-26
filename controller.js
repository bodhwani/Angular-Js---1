var app = angular.module('mainApp' , ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		template : 'Welcome to home page'
	})
	.when('/anotherPage', {
		template : 'Welcome to another page dear'
	})
	.otherwise({
		redirectTo : '/'
	});
});