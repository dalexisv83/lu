(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AppOsdCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: 'http://www.directv.com/cms3/support/osd_errors/osd2.json',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback',
                        dataSrc: 'errors'
                    });

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Error Code').withTitle('Error Code'),
                    DTColumnBuilder.newColumn('Error Message').withTitle('Error Message'),
                    DTColumnBuilder.newColumn('AAC Troubleshooting').withTitle('AAC Troubleshooting'),
                    DTColumnBuilder.newColumn('Customer Troubleshooting').withTitle('Customer Troubleshooting'),
                    DTColumnBuilder.newColumn('AAC URL').withTitle('AAC URL'),
                    DTColumnBuilder.newColumn('AAC HC').withTitle('AAC HC')
                ];
            }
        ]);
}(window.angular));