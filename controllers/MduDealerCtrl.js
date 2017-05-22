(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MduDealerCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/mdu_dealer.js').query().$promise;
                }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('property').withTitle('Property'),
                    DTColumnBuilder.newColumn('operator').withTitle('Operator'),
                    DTColumnBuilder.newColumn('status').withTitle('Status'),
                    DTColumnBuilder.newColumn('service').withTitle('Service'),
                    DTColumnBuilder.newColumn('phone').withTitle('Phone')
                ];
            }
        ]);
}(window.angular));