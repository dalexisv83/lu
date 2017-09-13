(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('GiftCardCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'URLS', '$http', '$rootScope', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, URLS, $http, $rootScope, pathFinder) {
                jQuery( ".loader" ).css("display","");                
                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/giftcard',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true).withOption('initComplete',function(){
                            jQuery( ".loader" ).css("display","none");
                        });


                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Gift').withTitle('Gift Offer Title').renderWith(function(data, type, full) {
                        return '<a href="' + full['Link'] + '" target="_blank">' + full['Gift'] + '</a>';
                    }),
                    DTColumnBuilder.newColumn('Expired').withTitle('Expired?').renderWith(function(data, type, full) {
                        return full['Expired'] ? full['Expired'] : '';
                    }),
                    DTColumnBuilder.newColumn('BCode').withOption('name', 'BCode').withTitle('B-Code').notVisible().renderWith(function (data, type, full) {
                        return full['BCode'] ? full['BCode'] : '';
                    }),
                    DTColumnBuilder.newColumn('OfferCode').withOption('name', 'OfferCode').withTitle('Offer Code').notVisible().renderWith(function (data, type, full) {
                        return full['OfferCode'] ? full['OfferCode'] : '';
                    }),
                    DTColumnBuilder.newColumn('DealerId').withOption('name', 'DealerId').withTitle('Dealer Id').notVisible().renderWith(function (data, type, full) {
                        return full['DealerId'] ? full['DealerId'] : '';
                    }),
                    DTColumnBuilder.newColumn('DNIS').withOption('name', 'DNIS').withTitle('DNIS').notVisible().renderWith(function (data, type, full) {
                        return full['DNIS'] ? full['DNIS'] : '';
                    }),
                    DTColumnBuilder.newColumn('YA_Offer').withOption('name', 'YA_Offer').withTitle('YA Offer #').notVisible().renderWith(function (data, type, full) {
                        return full['YA_Offer'] ? full['YA_Offer'] : '';
                    }),
                    DTColumnBuilder.newColumn('OfferType').withTitle('Offer Type'),
                    DTColumnBuilder.newColumn('RedemptionType').withTitle('Redemption Type')
                ];

                $scope.giftCardInst = {};

                //$http.jsonp(pathFinder.getApiNet($scope.network) + 'web/api/datalookup/GiftCardCat?callback=JSON_CALLBACK').then(function successCallback(response) {
                //    $scope.categories = response.data;
                //}, function errorCallback(response) {
                //    throw new Error('Data request failed:\n' + JSON.stringify(response));
                //});

                $scope.categories = [{
                    "category": "",
                    "label": "Search all"
                }, {
                    "category": "BCode",
                    "label": "B-Code"
                }, {
                    "category": "OfferCode",
                    "label": "Offer Code"
                }, {
                    "category": "DealerId",
                    "label": "Dealer ID"
                }, {
                    "category": "DNIS",
                    "label": "DNIS"
                }, {
                    "category": "YA_Offer",
                    "label": "YA Offer #"
                }];

                $scope.category = "";
                $scope.prevCat = null;

                $scope.changeCat = function () {
                    if ($scope.giftCardInst.DataTable) {
                        if ($scope.prevCat != '') {
                            $scope.giftCardInst.DataTable.column($scope.prevCat + ":name").visible(false, false);
                        }
                        if ($scope.category != '') {
                            $scope.giftCardInst.DataTable.column($scope.category + ":name").visible(true, false);
                        }
                        $rootScope.giftCat = $scope.category;
                        $rootScope.giftId = $scope.giftCardInst.id;
                        $scope.giftCardInst.DataTable.draw();
                        $scope.prevCat = $scope.category;
                    }
                };
            }
        ]);
}(window.angular));

app.run(function ($rootScope) {
    $.fn.dataTable.ext.search.push(
        function (settings, searchData, index, rowData, counter) {
            if (settings.sTableId == $rootScope.giftId) {
                if ($rootScope.giftCat && settings.oPreviousSearch.sSearch) {
                    if (!rowData[$rootScope.giftCat]) {
                        return false;
                    }
                    return rowData[$rootScope.giftCat].toLowerCase().indexOf(settings.oPreviousSearch.sSearch.toLowerCase()) > -1 ? true : false;
                }
            }
            return true;
        }
    );
});