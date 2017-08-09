(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DvrHistoryCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                document.getElementById("spinner").classList.remove('ng-hide');
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/dvrhistory',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('initComplete',function(){
                         document.getElementById("spinner").classList.add('ng-hide');
                    });


                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Code').withTitle('Code').withOption('sType', 'numeric').withOption("width", "5%"),
                    DTColumnBuilder.newColumn('Description').withTitle('Description'),
                    DTColumnBuilder.newColumn('EventStatus').withTitle('Event Status'),
                    DTColumnBuilder.newColumn('Notes').withTitle('Notes')
                ];
            }
        ]);
}(window.angular));