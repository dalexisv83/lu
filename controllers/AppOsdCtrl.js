(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AppOsdCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS',
            function ($scope, $http, DTOptionsBuilder, DTColumnBuilder, URLS) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: URLS.API_DEV + 'web/api/DataLookup/apposd',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withLanguage($scope.searchOpt);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('ErrorCode').withTitle('Error Code'),
                    DTColumnBuilder.newColumn('ErrorMessage').withTitle('Error Message'),
                    DTColumnBuilder.newColumn('AacTroubleshooting').withTitle('MyCSP Troubleshooting').renderWith(function (data, type, full) {
                        if (full['AacURL']) {
                            return '<a href="' + full['AAC URL'] + '" target="_blank">' + full['AacTroubleshooting'] + '</a>';
                        } else if (full['AacTroubleshooting']) {
                            return full['AacTroubleshooting'].replace(/\\\//g, "/");
                        } else {
                            return '';
                        }
                    })
                ];
            }
        ]);
}(window.angular));