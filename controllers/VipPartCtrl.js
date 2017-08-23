(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('VipPartCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/vippartner',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                        });

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Code').withTitle('Code'),
                    DTColumnBuilder.newColumn('Name').withTitle('Name')
                ];
            }
        ]);
}(window.angular));