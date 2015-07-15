angular
	.module('app')
	.filter('sortPhones', function(){

		this.sort = {
			By: 'name',
			descending: false
		};
		this.Sorting = function(By){
			console.log(this.By);
		};
	})