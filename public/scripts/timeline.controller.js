(function () {
    'use strict';

    'use strict';
    angular.module('timeline')
        .controller('TimelineCtrl', TimelineCtrl);

    function TimelineCtrl(TimelineFactory, $scope, moment) {
        var vm = this;
        vm.itens = [];
        
        init();
        
        function init() {
            TimelineFactory.entrar(callbackVendas, callbackExcluir);
        }

        function callbackVendas(resp) {
            if (angular.isArray(resp)){
                vm.itens = resp;
            }else{
                vm.itens.unshift(resp);
            }
            $scope.$apply();
        }
        
        function callbackExcluir(id){
            vm.itens = vm.itens.filter(function(e){
                return e.id !== id;
            });
            $scope.$apply();
        }

        vm.excluir = function(id){
            TimelineFactory.excluir(id);
        }

        // // optional: not mandatory (uses angular-scroll-animate)
        // vm.animateElementIn = function ($el) {
        //     $el.removeClass('timeline-hidden');
        //     $el.addClass('bounce-in');
        // };

        // // optional: not mandatory (uses angular-scroll-animate)
        // vm.animateElementOut = function ($el) {
        //     $el.addClass('timeline-hidden');
        //     $el.removeClass('bounce-in');
        // };
        
        vm.formatDate = function(date){
            return moment(date).fromNow();
        }
    };


})();
