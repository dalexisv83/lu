(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DwsIposCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/dws_ipos_dealer.js').query().$promise;
                }).withPaginationType('full_numbers');

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Dealer Number').withTitle('Dealer Number'),
                    DTColumnBuilder.newColumn('Business Name').withTitle('Business Name'),
                    DTColumnBuilder.newColumn('DBA').withTitle('DBA'),
                    DTColumnBuilder.newColumn('Store Name').withTitle('Store Name'),
                    DTColumnBuilder.newColumn('Customer Referral Number').withTitle('Customer Referral Number')
                ];
            }
        ]);
}(window.angular));