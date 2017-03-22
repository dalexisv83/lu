(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DvrHistoryCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/dvr_history.js').query().$promise;
                }).withPaginationType('full_numbers');

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Code').withTitle('Code').withOption('sType', 'numeric'),
                    DTColumnBuilder.newColumn('Description').withTitle('Description'),
                    DTColumnBuilder.newColumn('Event Status').withTitle('Event Status'),
                    DTColumnBuilder.newColumn('Notes').withTitle('Notes')
                ];
            }
        ]);
}(window.angular));