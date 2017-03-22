(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('GiftCardCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
                $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return $resource('assets/datasource/gift_card_locator.js').query().$promise;
                }).withPaginationType('full_numbers');

                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('label').withTitle('label').notVisible(),
                    DTColumnBuilder.newColumn('Redemption Type').withTitle('Redemption Type'),
                    DTColumnBuilder.newColumn('Category').withTitle('Category'),
                    DTColumnBuilder.newColumn('Link').withTitle('Link'),
                    DTColumnBuilder.newColumn('Offer Type').withTitle('Offer Type'),
                    DTColumnBuilder.newColumn('Status').withTitle('Status'),
                    DTColumnBuilder.newColumn('Gift').withTitle('Gift')
                ];
            }
        ]);
}(window.angular));