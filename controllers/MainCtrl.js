(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MainCtrl', ['$scope', '$location', '$http', 'pathFinder', 'URLS',
            function ($scope, $location, $http, pathFinder, URLS) {
                $scope.disabled = true;
                $scope.fullURL = function (net,tool) {
                    var theURL;
                    if (net == 'local') {
                        theURL = 'assets/datasource/' + tool.Json + ".js";
                    } else {
                        theURL = pathFinder.getApiNet(net) + 'web/api/DataLookup/' + tool.Api;
                    }
                    return theURL;
                };
                $scope.loadMain = function () {
                    var select = {
                        "Api": "mainctrl?callback=JSON_CALLBACK",
                        "Json": "mainctrl.js?callback=JSON_CALLBACK"
                    };
                    $http.jsonp($scope.fullURL($scope.network, select)).then(function successCallback(response) {
                        $scope.init(response);
                    }, function errorCallback(response) {
                        throw new Error('Data request failed:\n' + JSON.stringify(response));
                    });
                };
                $scope.init = function (response) {
                    $scope.goHere = function (here) {
                        $location.path(here);
                    }
                    $scope.searchOpt = { "sSearch": "<h2 class='lLabel'>Search</h2> ", "sSearchPlaceholder": "Enter text here to search the table below" };
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
                            jQuery( ".showhide" ).addClass("closed").removeClass("opened");                             
                        }
                    });
                }
                if ($location.host() == 'vwecda05.testla.testfrd.directv.com' || $location.host() == 'localhost') {
                    $scope.disabled = false;
                    $scope.network = 'test';
                    $scope.loadMain();
                } else {
                $http.jsonp(URLS.API_INTRA + '/web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response) {
                        $scope.disabled = false;
                        $scope.network = 'intra';
                        $scope.loadMain();
                    }, function errorTest(response) {
                        $http.jsonp(URLS.API_EXTRA + '/web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response) {
                            $scope.disabled = false;
                            $scope.network = 'extra';
                            $scope.loadMain();
                        }, function errorTest(response) {
                            $scope.disabled = false;
                            $scope.network = 'local';
                            $scope.loadMain();
                        });
                    });
                }
            }
        ])
        .service('pathFinder', ['URLS', function (URLS) {
            this.getApiNet = function (net) {
                var basePath;
                switch (net) {
                    case 'intra':
                        basePath = URLS.API_INTRA;
                        break;

                    case 'extra':
                        basePath = URLS.API_EXTRA;
                        break;

                    case 'test':
                        basePath = URLS.API_DEV;
                        break;
                }
                return basePath;
            }
        }]);
}(window.angular));