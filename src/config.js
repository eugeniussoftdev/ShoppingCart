	angular.module('app')
	.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state(
				'/', {
					url: '/',
					templateUrl: 'home.html',
					controller: 'MyCtrl',
					controllerAs: 'cart'
				})
			.state(
				'shopping-cart', {
					url: '/shopping-cart',
					templateUrl: 'shopping-cart/shopping-cart.html',
					controller: 'MyCtrl',
					controllerAs: 'cart'

				})
			
		}])