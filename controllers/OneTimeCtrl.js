(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('OneTimeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                document.getElementById("spinner").classList.remove('ng-hide');
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/onetimecredit',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px").withOption("scrollX", true).withOption("scrollX", true).withOption('initComplete',function(){
                            document.getElementById("spinner").classList.add('ng-hide');
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