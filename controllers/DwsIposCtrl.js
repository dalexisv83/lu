(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('DwsIposCtrl', ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'pathFinder',
            function ($scope, $resource, DTOptionsBuilder, DTColumnBuilder, pathFinder) {
                jQuery(".loader").css("display", "");

                $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('scrollY', '100%')
                    .withOption('scrollX', '100%')
                    .withOption('ajax', {
                        url: pathFinder.getApiNet($scope.network) + 'web/api/DataLookup/dwsiposdealer',
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonCallback'
                    }).withPaginationType('full_numbers').withLanguage($scope.searchOpt).withOption('deferRender', true).withOption('initComplete', function () {
                        jQuery(".loader").css("display", "none");
                    });


                $scope.dtColumns = [
                    DTColumnBuilder.newColumn('ContractID').withTitle('Contract ID<br>(Corp ID)').withOption("width", "3%").renderWith(renderContractID_Type),
                    DTColumnBuilder.newColumn('DealerNum').withTitle('Dealer ID').withOption('sType', 'numeric').withOption('width', '3%'),
                    DTColumnBuilder.newColumn('DealerCode').withTitle('Dealer<br>Code').withOption('sType', 'numeric').withOption('width', '2%'),
                    DTColumnBuilder.newColumn('ContractType').withTitle('Contract<br>Type').withOption("width", "4%"),
                    DTColumnBuilder.newColumn('StoreNumber').withTitle('Location ID').withOption("width", "3%").notVisible(),
                    DTColumnBuilder.newColumn('BusinessName').withTitle('Business<br>Name').withOption('sType', 'numeric').withOption("width", "3%"),
                    DTColumnBuilder.newColumn('StoreName').withTitle('Store Name<br>(Location ID)').withOption("width", "6%").renderWith(renderStoreName_ID),
                    DTColumnBuilder.newColumn('City_State_Zip').withTitle('City/State/Zip').withOption("width", "6%"),
                    DTColumnBuilder.newColumn('Distributor').withTitle('Distr').withOption("width", "2%"),
                    DTColumnBuilder.newColumn('Customer_Referral_Num').withTitle('Phone<br>Number').withOption("width", "5%")
                ];
                function renderCityStateZip(data, type, row, meta) {
                    return row.City + ', ' + row.State + ' ' + row['Zip Code'];
                }
                function renderContractDate(data, type, row, meta) {
                    if (row['Contract_Start_End_Dt']) {
                        var buffer = row['Contract_Start_End_Dt'].split('T');
                        var date = buffer[0].split('-');
                        return date[1] + '/' + date[2] + '/' + date[0].substring(2);
                    }
                }
                function renderLocationDate(data, type, row, meta) {
                    if (row['Location_Start_End_Dt']) {
                        var buffer = row['Location_Start_End_Dt'].split('T');
                        var date = buffer[0].split('-');
                        return date[1] + '/' + date[2] + '/' + date[0].substring(2);
                    }
                }

                function renderDoubleDate(data, type, row, meta) {
                    if (row['Contract_Start_End_Dt']) {
                        var buffer = row['Contract_Start_End_Dt'].split('T');
                        var date = buffer[0].split('-');
                        var result1 = date[1] + '/' + date[2] + '/' + date[0].substring(2);
                    }
                    if (row['Location_Start_End_Dt']) {
                        var buffer = row['Location_Start_End_Dt'].split('T');
                        var date = buffer[0].split('-');
                        var result2 = date[1] + '/' + date[2] + '/' + date[0].substring(2);
                    }
                    return 'Contract: ' + result1 + ' <br> ' + 'Location: ' + result2;
                }

                function renderDealerNumStatus(data, type, row, meta) {
                    var result1 = row['DealerCode'] + '<br>(' + row['DealerNum'] + ')';

                    return result1;
                }

                function renderContractID_Type(data, type, row, meta) {
                    var result1 = row['ContractID'] + '<br>(' + row['CorpID'] + ')';

                    return result1;
                }

                function renderBusName_ID(data, type, row, meta) {
                    var result1 = row['BusinessName'] + '<br>' + '(' + row['CorpID'] + ')';

                    return result1;
                }
                function renderStoreName_ID(data, type, row, meta) {
                    var result1 = row['StoreName'] + '<br>' + '(' + row['StoreNumber'] + ')';

                    return result1;
                }
            }
        ]);
}(window.angular));