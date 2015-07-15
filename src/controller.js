angular
.module('app')
	.controller('MyCtrl', function(){


			this.inCart = sessionStorage.getItem('cart');
			this.inCart = this.inCart ? JSON.parse(this.inCart) : [];
			this.sum = sessionStorage.getItem('sum');
			this.sum = this.sum ? JSON.parse(this.sum) : 0;
			this.itemCounter = sessionStorage.getItem('counter');
			this.itemCounter = this.itemCounter ? JSON.parse(this.itemCounter): 0;
			


			this.products = function($http){
				var list = $http.get('products.json').success(function(response){
					return response.data;
				})
			}
			/* Products List */
			this.productList = [
				{name: 'HTC', model: 'One', price: 200, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'HTC', model: 'One M8', price: 200, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'HTC', model: 'One M9', price: 200, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'HTC', model: 'Desire 616', price: 200, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Lenovo', model: 'S920', price: 400, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Lenovo', model: 'S850', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Lenovo', model: 'P780', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Lenovo', model: 'Golden Warrior S8', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Lenovo', model: 'S820', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Iphone', model: '6', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Iphone', model: '5', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Iphone', model: '5S', price: 500, rating: 78, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
				{name: 'Iphone', model: '4S', price: 500, rating: 35, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'}			];
			/* Buy Function */
			this.buy = function(quantity, item){
				this.sum += item.price;
				this.itemCounter += quantity;
				
				var isset = false;
				for(var k = quantity; k >= 1; k--){

				for(var j in this.inCart){
					if(this.inCart[j].product.name == item.name && this.inCart[j].product.model == item.model){
						this.inCart[j].quantity++;
						this.inCart[j].sum += item.price;
						isset=true;
					}
				}
				if(isset == false){

				this.inCart.push({
					product: item,
					quantity: 1,
					sum: item.price
				})

				}
				} /* k loop end */
			

				sessionStorage.setItem('cart', JSON.stringify(this.inCart));
				sessionStorage.setItem('sum', JSON.stringify(this.sum));
				sessionStorage.setItem('counter', JSON.stringify(this.itemCounter));
			

			} /* Buy Func End*/

			/* Buy Function in Cart */
			this.addItem = function(quantity, item){
					this.sum += item.product.price;
				this.itemCounter += quantity;

				for(var i in this.inCart){
					if(this.inCart[i].product.name == item.product.name && this.inCart[i].product.model == item.product.model){
						this.inCart[i].quantity++;
						this.inCart[i].sum += item.product.price;

					}
				}

				sessionStorage.setItem('cart', JSON.stringify(this.inCart));
				sessionStorage.setItem('sum', JSON.stringify(this.sum));
				sessionStorage.setItem('counter', JSON.stringify(this.itemCounter));

							
			}
			/* Delete All items from Cart*/
			this.deleteAll = function(){
				this.inCart = [];
				this.sum = 0;
				this.itemCounter = 0;
				sessionStorage.clear();
				
				
			}
			/* Delete chosen Item from Cart*/
			this.deleteLast = function(item){
				var index = this.inCart.indexOf(item);
				this.inCart.splice(index, 1);
			}
			this.minusOne = function(item){
				this.sum -= item.product.price;
				this.itemCounter -= 1;

				for(var i in this.inCart){
					if(this.inCart[i].product.name == item.product.name && this.inCart[i].product.model == item.product.model){
						this.inCart[i].quantity--;
						this.inCart[i].sum -= item.product.price;

				}

			}
				console.log(item);
				sessionStorage.setItem('cart', JSON.stringify(this.inCart));
				sessionStorage.setItem('sum', JSON.stringify(this.sum));
				sessionStorage.setItem('counter', JSON.stringify(this.itemCounter));

				}
			// 	this.itemsPerPage = 6;
			// 	this.currentPage = 0;

			// this.setCurrentPage = function(pageNumber){
			// 	this.currentPage = pageNumber;
			// }
			this.sort = {
				By: 'name',
				descending: false
			};
			this.sor = function(By){
			console.log(this.sort.By);
			console.log(this.sort);

		};
			})