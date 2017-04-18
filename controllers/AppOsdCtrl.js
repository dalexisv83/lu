(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AppOsdCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: 'assets/datasource/app_osd.js',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback',
                        dataSrc: 'errors'
                    }).withLanguage($scope.searchOpt);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Error Code').withTitle('Error Code'),
                    DTColumnBuilder.newColumn('Error Message').withTitle('Error Message'),
                    DTColumnBuilder.newColumn('AAC Troubleshooting').withTitle('MyCSP Troubleshooting').renderWith(function (data, type, full) {
                        if (full['AAC URL']) {
                            return '<a href="' + full['AAC URL'] + '" target="_blank">' + full['AAC Troubleshooting'] + '</a>';
                        } else {
                            return full['AAC Troubleshooting'].replace(/\\\//g, "/");
                        }
                    })
                ];
            }
        ]);
}(window.angular));