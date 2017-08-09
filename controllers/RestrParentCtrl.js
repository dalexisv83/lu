(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('RestrParentCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/restrparent',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px");

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('NationalAccount').withTitle('National Account'),
                    DTColumnBuilder.newColumn('Type').withTitle('Type'),
                    DTColumnBuilder.newColumn('Reason').withTitle('Reason'),
                    DTColumnBuilder.newColumn('Brands').withTitle('Brands'),
                    DTColumnBuilder.newColumn('ESManager').withTitle('ES Manager'),
                    DTColumnBuilder.newColumn('Action').withTitle('Action')
                ];
            }
        ]);
}(window.angular));