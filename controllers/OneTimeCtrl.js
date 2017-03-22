(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('OneTimeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/one_time_credit.js').query().$promise;
                }).withPaginationType('full_numbers');

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('Credit Name').withTitle('Credit Name'),
                    DTColumnBuilder.newColumn('Credit Code').withTitle('Credit Code'),
                    DTColumnBuilder.newColumn('Appropriate Use').withTitle('Appropriate Use'),
                    DTColumnBuilder.newColumn('Examples').withTitle('Examples'),
                    DTColumnBuilder.newColumn('Application Rules').withTitle('Application Rules'),
                    DTColumnBuilder.newColumn('rank').withTitle('rank').notVisible()
                ];
            }
        ]);
}(window.angular));