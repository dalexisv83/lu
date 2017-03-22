(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('VipPartCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/vip_partner.js').query().$promise;
                }).withPaginationType('full_numbers');

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('category').withTitle('category').notVisible(),
                    DTColumnBuilder.newColumn('code').withTitle('Code'),
                    DTColumnBuilder.newColumn('name').withTitle('Name')
                ];
            }
        ]);
}(window.angular));