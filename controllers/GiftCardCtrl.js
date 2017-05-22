(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('GiftCardCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/gift_card_locator.js').query().$promise;
                }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true);

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('Gift').withTitle('Gift Offer Title').renderWith(function(data, type, full) {
                        return '<a href="' + full['Link'] + '" target="_blank">' + full['Gift'] + '</a>';
                    }),
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('Category').withTitle('Category'),
                    DTColumnBuilder.newColumn('Status').withTitle('Expired?'),
                    DTColumnBuilder.newColumn('Offer Type').withTitle('Offer Type'),
                    DTColumnBuilder.newColumn('Redemption Type').withTitle('Redemption Type')
                ];
            }
        ]);
}(window.angular));