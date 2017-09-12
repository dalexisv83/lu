(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MainCtrl', ['$scope', '$location', '$http', 'pathFinder',
            function ($scope, $location, $http, pathFinder) {
                $scope.disabled = true;
                $http.jsonp(pathFinder.getApiNet() + 'web/api/DataLookup/mainctrl?callback=JSON_CALLBACK').then(function successCallback(response) {
                    $scope.init(response);
                }, function errorCallback(response) {
                    throw new Error('Data request failed:\n' + JSON.stringify(response));
                });
                $scope.init = function (response) {
                    $scope.disabled = false;
                    $scope.goHere = function (here) {
                        $location.path(here);
                    }
                    $scope.searchOpt = { "sSearch": "<h2 class='lLabel'>Search</h2> ", "sSearchPlaceholder": "Enter text here to search" };
                    $scope.tools = response.data;
                    $scope.$watch(function () {
                        return $location.path();
                    }, function (params) {
                        $scope.tool = $scope.tools.find(function (tool) {
                            return params.substring(1) == tool.URL;
                        });
                    }, true);
                    $scope.$watch('tool', function () {
                        if ($scope.tool) {
                            $location.path($scope.tool.URL);
                        }
                    });
                }
            }
        ]);
}(window.angular));