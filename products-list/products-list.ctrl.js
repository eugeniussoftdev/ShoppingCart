	angular.module('root')
	    .controller('ProductsListCtrl', function() {
	        'use strict';
	        this.phonesBase = [{
	                'phonesName': 'HTC',
	                price: 200,
	                rating: 91
	            }, {
	                'phonesName': 'Lenovo',
	                price: 100,
	                rating: 54
	            }, {
	                'phonesName': 'Ipont',
	                price: 500,
	                rating: 89
	            }, {
	                'phonesName': 'Samsung',
	                price: 250,
	                rating: 74
	            }, {
	                'phonesName': 'Nokia',
	                price: 100500,
	                rating: 100
	            }, {
	                'phonesName': 'Fly',
	                price: 0,
	                rating: 2
	            }, {
	                'phonesName': 'Shansung',
	                price: 73,
	                rating: 64
	            }

	        ];
	        this.sortType = '';
	        this.sortReverse = false;
	        this.search = 'phonesName';
	    })