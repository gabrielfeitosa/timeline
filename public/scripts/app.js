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
            controller: 'TimelineCtrl',
            templateUrl: 'timeline.html'
        });
    });
    
    
    app.constant('moment', moment);
})();