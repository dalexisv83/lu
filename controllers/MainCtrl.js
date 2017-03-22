(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MainCtrl', ['$scope', '$location',
            function ($scope, $location) {
                if (($location.path() == '/lookups.htm') || ($location.path() == '')) {
                    $location.path('sfdc');
                }
                $scope.goHere = function (here) {
                    $location.path(here);
                }
                var tools = [{
                    "name": "SFCD Retention",
                    "url": "sfdc",
                    "src": "views/sfdc.htm?@@BUSTER@@",
                }, {
                    "name": "Gift Card Locator",
                    "url": "gift-card",
                    "src": "views/gift-card.htm?@@BUSTER@@",
                }, {
                    "name": "Credit Adjustment Codes",
                    "url": "one-time",
                    "src": "views/one-time.htm?@@BUSTER@@",
                }, {
                    "name": "DIRECTV App OSD",
                    "url": "app-osd",
                    "src": "views/app-osd.htm?@@BUSTER@@"
                }, {
                    "name": "Corporate VIP Offer",
                    "url": "vip-partner",
                    "src": "views/vip-partner.htm?@@BUSTER@@"
                }, {
                    "name": "DWS/iPOS Dealer Order",
                    "url": "dws-ipos",
                    "src": "views/dws-ipos.htm?@@BUSTER@@"
                }, {
                    "name": "DVR History",
                    "url": "dvr-history",
                    "src": "views/dvr-history.htm?@@BUSTER@@"
                }, {
                    "name": "MDU Dealer",
                    "url": "mdu-dealer",
                    "src": "views/mdu-dealer.htm?@@BUSTER@@"
                }, {
                    "name": "Account Type Information",
                    "url": "acc-type",
                    "src": "views/acc-type.htm?@@BUSTER@@"
                }, {
                    "name": "National Restricted Accounts - Parent Co",
                    "url": "restr-parent",
                    "src": "views/restr-parent.htm?@@BUSTER@@"
                }, {
                    "name": "National Restricted Accounts - All Brands",
                    "url": "restr-all",
                    "src": "views/restr-all.htm?@@BUSTER@@"
                }];
                $scope.tools = tools;
                $scope.$watch(function () {
                    return $location.path();
                }, function (params) {
                    $scope.page = params.substring(1);
                }, true);
                $scope.$watch('page', function () {
                    $location.path($scope.page);
                });
            }
        ]);
}(window.angular));