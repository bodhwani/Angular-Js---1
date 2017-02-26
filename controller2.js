var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'page.html'
	})
	.when('/anotherPage', {
		templateUrl : 'hello.html'
	})
	.otherwise({
		redirectTo : '/'
	});
});