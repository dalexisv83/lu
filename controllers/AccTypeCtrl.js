(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AccTypeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery( ".loader" ).css("display","");
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: $scope.fullURL($scope.network, $scope.tool),
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px").withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                    });


                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Type').withTitle('Type'),
                    DTColumnBuilder.newColumn('Description').withTitle('Description'),
                    DTColumnBuilder.newColumn('Segment').withTitle('Segment'),
                    DTColumnBuilder.newColumn('AgentActions').withTitle('Agent Actions'),
                    DTColumnBuilder.newColumn('Notes').withTitle('Notes'),
                    DTColumnBuilder.newColumn('MayClgDisconnectAccount').withTitle('May CLG Disconnect Account?')
                ];
            }
        ]);
}(window.angular));