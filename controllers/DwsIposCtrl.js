(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DwsIposCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/dwsiposdealer',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Dealer Number').withTitle('Dealer Number').withOption('sType', 'numeric').withOption("width", "12.5%"),
                    DTColumnBuilder.newColumn('Business Name').withTitle('Business Name').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('DBA').withTitle('DBA').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('Store Name').withTitle('Store Name').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('Customer Referral Number').withTitle('Customer Referral Number').withOption('sType', 'numeric').withOption("width", "12.5%")
                ];
            }
        ]);
}(window.angular));