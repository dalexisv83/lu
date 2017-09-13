(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AppOsdCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $http, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: $scope.fullURL($scope.network, $scope.tool),
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
                            return '<a href="https://www.e-access.att.com/mycsp/mycspportal/proxyServlet?content_matrix_id=' + full['AacURL'] + '" target="_blank">' + full['AacTroubleshooting'] + '</a>';
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