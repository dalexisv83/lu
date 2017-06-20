(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('VipPartCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, URLS) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: URLS.API_DEV + 'web/api/DataLookup/vippartner',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Code').withTitle('Code'),
                    DTColumnBuilder.newColumn('Name').withTitle('Name')
                ];
            }
        ]);
}(window.angular));