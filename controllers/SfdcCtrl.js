(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('SfdcCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/sfdc',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Reason').withTitle('Reason'),
                    DTColumnBuilder.newColumn('SubReason').withTitle('Sub-Reason'),
                    DTColumnBuilder.newColumn('Definition').withTitle('Definition')
                ];
            }
        ]);
}(window.angular));