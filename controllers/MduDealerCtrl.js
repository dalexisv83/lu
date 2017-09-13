(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MduDealerCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: $scope.fullURL($scope.network, $scope.tool),
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true).withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                        });

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