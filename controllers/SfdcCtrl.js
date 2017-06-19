(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('SfdcCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, URLS) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: URLS.API_DEV + 'web/api/DataLookup/sfdc',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Reason').withTitle('Reason'),
                    DTColumnBuilder.newColumn('Sub-Reason').withTitle('Sub-Reason'),
                    DTColumnBuilder.newColumn('Definition').withTitle('Definition')
                ];
            }
        ]);
}(window.angular));