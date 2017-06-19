(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('GiftCardCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS', '$http',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, URLS, $http) {
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: URLS.API_DEV + 'web/api/DataLookup/giftcard',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Gift').withTitle('Gift Offer Title').renderWith(function(data, type, full) {
                        return '<a href="' + full['Link'] + '" target="_blank">' + full['Gift'] + '</a>';
                    }),
                    DTColumnBuilder.newColumn('Status').withTitle('Expired?'),
                    DTColumnBuilder.newColumn('SearchField').withTitle('SearchField').notVisible(),
                    DTColumnBuilder.newColumn('SearchField1').withTitle('SearchField1').notVisible(),
                    DTColumnBuilder.newColumn('OfferType').withTitle('Offer Type'),
                    DTColumnBuilder.newColumn('RedemptionType').withTitle('Redemption Type')
                ];

                $scope.giftCardInst = {};

                //$http.jsonp(URLS.API_DEV + 'web/api/datalookup/GiftCardCat?callback=JSON_CALLBACK').then(function successCallback(response) {
                //    $scope.categories = response.data;
                //}, function errorCallback(response) {
                //    throw new Error('Data request failed:\n' + JSON.stringify(response));
                //});

                $scope.categories = [{
                    "category": "did",
                    "label": "Dealer ID"
                }, {
                    "category": "ya-offer",
                    "label": "YA Offer #"
                }, {
                    "category": "b-code",
                    "label": "B-Code"
                }, {
                    "category": "offer-code",
                    "label": "Offer Code"
                }, {
                    "category": "dnis",
                    "label": "DNIS"
                }, {
                    "category": "",
                    "label": "All offer types"
                }];

                $scope.$watch('category', function () {
                    if ($scope.giftCardInst.DataTable) {
                        $scope.giftCardInst.DataTable.column(3).search($scope.category).draw();
                    }
                });
            }
        ]);
}(window.angular));