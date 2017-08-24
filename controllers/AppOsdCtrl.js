(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AppOsdCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $http, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/apposd',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withLanguage($scope.searchOpt).withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                        });

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('ErrorCode').withTitle('Error Code'),
                    DTColumnBuilder.newColumn('ErrorMessage').withTitle('Error Message'),
                    DTColumnBuilder.newColumn('AacTroubleshooting').withTitle('MyCSP Troubleshooting').renderWith(function (data, type, full) {
                        if (full['AacURL']) {
                            return '<a href="' + full['AacURL'] + '" target="_blank">' + full['AacTroubleshooting'] + '</a>';
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