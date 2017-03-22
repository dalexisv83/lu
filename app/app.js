/*jslint unparam: true*/
(function(angular) {
    'use strict';
    angular.module('lookups', ['ngSanitize', 'datatables', 'ngResource'])
        .config(['$httpProvider', function ($httpProvider) {
            cache: true
        }]);
}(window.angular));

var app = angular.module('lookups');

app.directive("ngWindowPie", ['$timeout', function ($timeout) {
    'use strict';
    return function (scope, element, attrs) {
	if (window.PIE) {
	    $timeout(function () {
		window.PIE.attach(angular.element(element)[0]);	      
	    });
	}
    };   
}]);
/*jslint unparam: false*/