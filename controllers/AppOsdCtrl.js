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
                    DTColumnBuilder.newColumn('Error Code').withTitle('Error Code'),
                    DTColumnBuilder.newColumn('Error Message').withTitle('Error Message'),
                    DTColumnBuilder.newColumn('AAC Troubleshooting').withTitle('MyCSP Troubleshooting').renderWith(function (data, type, full) {
                        if (full['AAC URL']) {
                            return '<a href="' + full['AAC URL'] + '" target="_blank">' + full['AAC Troubleshooting'] + '</a>';
                        } else if (full['AAC Troubleshooting']) {
                            return full['AAC Troubleshooting'].replace(/\\\//g, "/");
                        } else {
                            return '';
                        }
                    })
                ];
            }
        ]);
}(window.angular));