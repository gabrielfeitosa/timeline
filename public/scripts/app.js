/* global moment */
(function () {
    'use strict';

    var app = angular.module('timeline', [
        'ngSanitize',
        'ui.router',
        'angular-timeline',
        'angular-scroll-animate'
    ]);

    app.config(function ($stateProvider) {
        $stateProvider.state('timeline', {
            url: '',
            controller: 'TimelineCtrl as timeline',
            templateUrl: 'timeline.html'
        }).state('venda', {
            url: '/venda',
            controller: 'VendaCtrl as venda',
            templateUrl: 'venda.html'
        });
    });
        
    app.constant('moment', moment);
})();