
angular.module('root')
    .filter('stars', function() {
        'use strict';
        var filledStar = '\ue006',
            emptyStar = '\ue007'
        return function(rating) {

            var filled = Math.floor(rating / 20),
                result = '';
            for (var i = 0; i < filled; i++) {
                result += filledStar
            }

            if (rating % 20 >= 15) {
                result += filledStar
            } else if (rating % 20 >= 5) {
                result += emptyStar
            }
            return result

        }
    })