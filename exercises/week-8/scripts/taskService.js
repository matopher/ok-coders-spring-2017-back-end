(function () {
	var app = angular.module('app');

	app.factory('taskService', function ($http){
		var localApi = 'http://localhost:8088/';
		return {
			getTask: function(){
				return $http.get(localApi + '/tasks');
			}
		}
	});
}());