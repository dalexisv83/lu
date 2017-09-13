/*jslint unparam: true*/
(function(angular) {
    'use strict';
    angular.module('lookups', ['ngSanitize', 'datatables', 'ngResource', 'lookups.constants'])
        .config(['$httpProvider', function ($httpProvider) {
            cache: true
        }])
        .run(['DTDefaultOptions', function (DTDefaultOptions) {
            DTDefaultOptions.setLoadingTemplate('<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>');
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
}]).directive('showhide', ['$timeout', function ($timeout) {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            $timeout(function () {
                opened = true;
                element.on('click', '.show', function(){
                    toggle()
                })

                function toggle() {
                    opened = !opened;
                    element.removeClass(opened ? 'closed' : 'opened');
                    element.addClass(opened ? 'opened' : 'closed');
                }
                toggle();
            })            
        }
    }
}]);

(function (angular) {
    'use strict';
    angular.module('lookups.constants', [
        'constants.urls'
    ]);
}(window.angular));
/*jslint unparam: false*/