(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('SfdcCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/sfdc_retention.js').query().$promise;
                }).withPaginationType('full_numbers');

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('Reason').withTitle('Reason'),
                    DTColumnBuilder.newColumn('Sub-Reason').withTitle('Sub-Reason'),
                    DTColumnBuilder.newColumn('Definition').withTitle('Definition')
                ];
            }
        ]);
}(window.angular));