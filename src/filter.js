

.filter('page', function(ITEM_PER_PAGE){

	return function(array, page){
		/* сделать проверку на существование элемента в массиве */

		return array.slice((page-1)*ITEM_PER_PAGE, ITEM_PER_PAGE)

	}
})
.constant('ITEM_PER_PAGE', 10)



//////

function($stateParams, products, ITEM_PER_PAGE){
	this.page = $stateParams.page || 1;
	this.pageConstant = Math.ceil(products.length / ITEM_PER_PAGE)
	this.page = Math.min (this.page, this.PageCount)
}