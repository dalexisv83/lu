(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('OneTimeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: $scope.fullURL($scope.network, $scope.tool),
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px").withOption("scrollX", true).withOption("scrollX", true).withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                        });


                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('CreditName').withTitle('Credit Name').withOption("width", "20%"),
                    DTColumnBuilder.newColumn('CreditCode').withTitle('Credit Code').withOption('sType', 'numeric').withOption("width", "5%"),
                    DTColumnBuilder.newColumn('AppropriateUse').withTitle('Appropriate Use').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('Examples').withTitle('Examples').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('ApplicationRules').withTitle('Application Rules').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('Rank').withTitle('rank').notVisible()
                ];
            }
        ]);
}(window.angular));