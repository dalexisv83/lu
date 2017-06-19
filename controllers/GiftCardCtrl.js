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
            }
        ]);
}(window.angular));