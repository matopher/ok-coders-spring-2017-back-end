(function(){
	var app = angular.module('app', ['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider.when('/home', {
			controller: 'mainController',
			templateUrl: '/views/tasks.html'
		});

		$routeProvider.otherwise({redirectTo: '/home'});
	});
}());
