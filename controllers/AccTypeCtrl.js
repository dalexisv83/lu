(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('AccTypeCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/accounttype',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption("scrollX", true).withOption("scrollY", "400px");

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