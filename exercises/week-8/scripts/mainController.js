(function(){
	var app = angular.module('app');

	app.controller('mainController', function($scope, taskService, $location){
			function init(){
				taskService.getTask().then(function(response){
					// console.log(response);
					$scope.tasks = response.data;
				}, function(error){
					alert(error,statusText);
				});
			};

			init();
	});
}());