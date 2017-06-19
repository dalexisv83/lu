(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MduDealerCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, URLS) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: URLS.API_DEV + 'web/api/DataLookup/mdudealer',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('Property').withTitle('Property'),
                    DTColumnBuilder.newColumn('Operator').withTitle('Operator'),
                    DTColumnBuilder.newColumn('Status').withTitle('Status'),
                    DTColumnBuilder.newColumn('Service').withTitle('Service'),
                    DTColumnBuilder.newColumn('Phone').withTitle('Phone')
                ];
            }
        ]);
}(window.angular));