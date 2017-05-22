(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('RestrAllCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/restr_all.js').query().$promise;
                }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px");

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('NATIONAL ACCOUNT').withTitle('National Account'),
                    DTColumnBuilder.newColumn('TYPE').withTitle('Type'),
                    DTColumnBuilder.newColumn('REASON').withTitle('Reason'),
                    DTColumnBuilder.newColumn('BRANDS').withTitle('Brands'),
                    DTColumnBuilder.newColumn('ACTION').withTitle('Action')
                ];
            }
        ]);
}(window.angular));