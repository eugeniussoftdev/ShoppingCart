angular
		.module('app', ['ui.router'])
		.factory('MyService', function($http){
			var products = $http.get('products.json').success(function(response){
				return response.data;
			})
			
		})
	
	