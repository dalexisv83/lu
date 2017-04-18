(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DwsIposCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/dws_ipos_dealer.js').query().$promise;
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