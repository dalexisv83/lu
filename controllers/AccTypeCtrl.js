(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AccTypeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/acc_type.js').query().$promise;
                }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px");

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Type').withTitle('Type'),
                    DTColumnBuilder.newColumn('Description').withTitle('Description'),
                    DTColumnBuilder.newColumn('Segment').withTitle('Segment'),
                    DTColumnBuilder.newColumn('Agent Actions').withTitle('Agent Actions'),
                    DTColumnBuilder.newColumn('Notes').withTitle('Notes'),
                    DTColumnBuilder.newColumn('May CLG Disconnect Account?').withTitle('May CLG Disconnect Account?')
                ];
            }
        ]);
}(window.angular));