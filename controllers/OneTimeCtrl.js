(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('OneTimeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/one_time_credit.js').query().$promise;
                }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px").withOption("scrollX", true);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('Credit Name').withTitle('Credit Name').withOption("width", "20%"),
                    DTColumnBuilder.newColumn('Credit Code').withTitle('Credit Code').withOption('sType', 'numeric').withOption("width", "5%"),
                    DTColumnBuilder.newColumn('Appropriate Use').withTitle('Appropriate Use').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('Examples').withTitle('Examples').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('Application Rules').withTitle('Application Rules').withOption("width", "25%"),
                    DTColumnBuilder.newColumn('rank').withTitle('rank').notVisible()
                ];
            }
        ]);
}(window.angular));