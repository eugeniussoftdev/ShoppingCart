//  использовать будем <bind-to-state>  сюда попадает темплейт  </bind-to-state>
//

.directive('bindToState', function(/*DI*/){

	return {

		templateUrl(/* путь на наш участо кода*/)
		restrict: "AECM"  // ARCM attrebut or directive or class (better class not to use) or comments (also better not to use) We can use few for exmpl:  "AE"
		link: function(scope, element, attr){
			element.on('click', function(){
				alert(scope.text)

				// or ng-click

			})
		}
		scope: {
			text: "= alertText"   // такая запить будет искать в директиве  (@ = & так же используются)
		}
	}
})

// Example:
// <bindToState>
// h1 Hello  /h1    // при клике на это выскочить  Alert, который выше
// </bindToState

// <bindToState ng-click="">
// h1 Hello  /h1    // при клике на это выскочить  Alert, который выше
// </bindToState


.directive('progress',function(){

	return{
		template: "<div><div></div></div>",
		scope: {
			value: "="
			max: "="
		},
		link: function(scope, element){
			var outer = element,
				inner = element[0].firstChild;

			outer.style.position = "relative"
			inner.style.position = "absolute"
			inner.style.bottom = 0
			inner.style.top = 0
			inner.style.width = (value/max * 100) + "%"
		}
	}
})
