(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('SfdcCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: $scope.fullURL($scope.network, $scope.tool),
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                        });

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Reason').withTitle('Reason'),
                    DTColumnBuilder.newColumn('SubReason').withTitle('Sub-Reason'),
                    DTColumnBuilder.newColumn('Definition').withTitle('Definition')
                ];
            }
        ]);
}(window.angular));