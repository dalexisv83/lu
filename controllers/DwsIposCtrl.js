(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DwsIposCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, URLS) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: URLS.API_DEV + 'web/api/DataLookup/dwsiposdealer',
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