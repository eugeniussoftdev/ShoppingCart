describe('My Test', function(){
	it('this is a test', function(){
		expect(2).toEqual(2)
	})
	beforeEach(module('app'))
	it('text ', function(){

	})
	it('text ', inject(function(ProductList, Product){
		// here dependency Injection takes the injection from beforeEach(module('app'))

		var data = {id:1};
	}))
	expect(ProductList(data)).toBe(true)

})