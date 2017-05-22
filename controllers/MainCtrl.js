(function (angular) {
    'use strict';
    angular.module('lookups')
        .controller('MainCtrl', ['$scope', '$location',
            function ($scope, $location) {
                $scope.goHere = function (here) {
                    $location.path(here);
                }
                var tools = [{
                    "name": "SFDC Retention",
                    "url": "sfdc",
                    "src": "views/sfdc.htm?@@BUSTER@@",
                    "text": "Use the search field to find the Reason, Sub-Reason, and Definitions for SFDC Retention Dispositions.  Simply type in a search term (like \"Dispute\" or \"Fraud\") to find the information."
                }, {
                    "name": "Gift Guidance Locator",
                    "url": "gift-card",
                    "src": "views/gift-card.htm?@@BUSTER@@",
                    "text": "<ol><li>Try to locate offer details using Guidance Locator Tool.<ol type=\"A\"><li>For best results, complete search in following order<ol><li>B-code or offer code (<a href=\"assets/img/gc_offer_rio.JPG\" target=\"_blank\" target=\"_blank\" title=\"gc_offer_rio.JPG\">Screenshot</a>)<ol><li><strong>Note:</strong>&nbsp;If information is not available on Receivers tab, it may appear on Activation tab &gt; Programming section. (<a href=\"assets/img/gc_offer_rio_prog_tab.JPG\" target=\"_blank\" title=\"gc_offer_rio_prog_tab.JPG\">Screenshot</a>)</li></ol></li><li>Dealer ID<ol><li>Dealer ID is found on Account Tab (expanded) locate Dealer field for Dealer ID number (e.g. 1721271)</li><li><strong>Do not</strong>&nbsp;use for Winback offers.</li><li>Some Dealer IDs apply to multiple offers, which is too long to list in offer page or Guidance Locator results.</li></ol></li><li>DNIS (available on OMS order history screen)</li><li>Offer name (e.g. Wireless bridge, Best Buy, Costco, etc.)</li></ol></li></ol></li><li>If the MyCSP Page for the offer is found, follow offer guidance.</li><li>If MyCSP Page for the offer cannot be found for the offer</li></ol>"
                }, {
                    "name": "Credit Adjustment Codes",
                    "url": "one-time",
                    "src": "views/one-time.htm?@@BUSTER@@",
                    "text": "<p>To use the Credit Adjustment Code Locator, search for:</p><ul><li>The name of the credit code&nbsp;</li><li>The credit code number</li></ul>"
                }, {
                    "name": "DIRECTV App OSD",
                    "url": "app-osd",
                    "src": "views/app-osd.htm?@@BUSTER@@",
                    "text": "For all unresolved Mobile DVR and GenieGO troubleshooting calls, please ask the customer to submit log files for both their mobile device and the Genie. See <a href=\"http://mycsp.web.att.com/mycspportal/proxyServlet?content_matrix_id=myc_sup_tv_tro_rec_539494\" target=\"_blank\">Submit Error Logs</a>."
                }, {
                    "name": "Corporate VIP Offer",
                    "url": "vip-partner",
                    "src": "views/vip-partner.htm?@@BUSTER@@",
                    "text": "<ul><li>Not all participating corporate partners' names&nbsp;available.</li><li>Follow&nbsp;VIP Offer call-handling procedures if a caller provides a partner code, even if partner name does not come up in search results.</li></ul>"
                }, {
                    "name": "DWS/iPOS Dealer Order",
                    "url": "dws-ipos",
                    "src": "views/dws-ipos.htm?@@BUSTER@@",
                    "text": "<ul><li>In Rio, locate dealer number in Rio Account (expanded view).</li><li>Locate dealer number in \"Dealer\" field in Rio Account applet (expanded view).</li></ul>"
                }, {
                    "name": "DVR History",
                    "url": "dvr-history",
                    "src": "views/dvr-history.htm?@@BUSTER@@",
                    "text": "<ul><li>Enter the code number in the search box below.<ul><li>If the history code number has a slash, enter the number with no spaces (<strong>Example:</strong> 13/2).</li></ul></li></ul>"
                }, {
                    "name": "MDU Dealer",
                    "url": "mdu-dealer",
                    "src": "views/mdu-dealer.htm?@@BUSTER@@",
                    "text": "<p>System Operator is the authorized DIRECTV sales and service partner for a Multi-Dwelling property. If customers don't know how to contact their System Operator, follow the below steps. See Call Handling for when to refer a subscriber to their System Operator.</p><p>If customer claims to be living in a Multi-Dwelling unit and account type is not MDU/TMU/JDU/JMU/TMW/JMW/TCD/JCD, see DIRECTV Connected Property.</p><p><strong>Note for MDO accounts only</strong>: Enter the MDO account number in Dealer Number field below. If it does not return a System Operator, do <strong>not</strong> proceed to Steps 2 or 3. See instead MDO Account Types.</p><ol><li>In Rio, find <strong>Dealer</strong> field on <strong>Accounts</strong> tab (expanded view).</li><li>Enter&nbsp;\"Dealer\" number into field below.<ol type=\"A\"><li>Note: Do not use Dealer number to search for contact information in Rio. Search returns incorrect dealer contact information and customers must call back.</li></ol></li><li>Provide customer with System Operator's contact information.&nbsp;</li></ol><p><strong>Note: When contacting a System Operator outside of normal business hours, customer may instead reach voicemail or a messaging service. Instruct customer to leave a message and that the System Operator will contact provide assistance with their issue.</p><p>Should lookup fail, or customer indicate information is inaccurate, please have customer contact their property management and escalate to site leadership to allow the call-type operator to update information for this property.</strong></p>"
                }, {
                    "name": "Account Type Information",
                    "url": "acc-type",
                    "src": "views/acc-type.htm?@@BUSTER@@",
                    "text": "Use the search field to find the Account Type Information. Simply type in a search term (like \"Analog\" or \"National\") to find the information."
                }, {
                    "name": "National Restricted Accounts - Parent Co",
                    "url": "restr-parent",
                    "src": "views/restr-parent.htm?@@BUSTER@@",
                    "text": "Using the Search field below, type in the name of the business. If the name of the business populates in the below table, DO NOT SELL or SET UP THESE ACCOUNTS. These customers should be referred directly to 866-949-4504 or email Nationalaccounts@directv.com"
                }, {
                    "name": "National Restricted Accounts - All Brands",
                    "url": "restr-all",
                    "src": "views/restr-all.htm?@@BUSTER@@",
                    "text": "Using the Search field below, type in the name of the business. If the name of the business populates in the below table, DO NOT SELL or SET UP THESE ACCOUNTS. These customers should be referred directly to 866-949-4504 or email Nationalaccounts@directv.com"
                }];
                $scope.searchOpt = {"sSearch": "<h2 class='lLabel'>Lookup</h2> ", "sSearchPlaceholder": "Enter text here to search"};
                $scope.tools = tools;
                $scope.$watch(function () {
                    return $location.path();
                }, function (params) {
                    $scope.tool = $scope.tools.find(function (tool) {
                        return params.substring(1) == tool.url;
                    });
                }, true);
                $scope.$watch('tool', function () {
                    $location.path($scope.tool.url);
                });
            }
        ]);
}(window.angular));