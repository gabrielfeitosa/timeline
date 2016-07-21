(function () {
    'use strict';

    'use strict';
    angular.module('timeline')
        .controller('TimelineCtrl', TimelineCtrl);

    function TimelineCtrl($scope, TimelineFactory, moment) {
        $scope.events = [
            // {
            //     class: 'info',
            //     badgeIconClass: 'glyphicon-check',
            //     title: 'First heading',
            //     when: '11 hours ago via Twitter',
            //     content: 'Some awesome content.'
            // },
            // {
            //     badgeClass: 'warning',
            //     badgeIconClass: 'glyphicon-credit-card',
            //     title: 'Second heading',
            //     when: '12 hours ago via Twitter',
            //     content: 'More awesome content.'
            // }
        ];
        
        init();
        
        function init() {
            TimelineFactory.entrar(callbackVendas, callbackExcluir);
        }

        function callbackVendas(resp) {
            if (angular.isArray(resp)){
                $scope.events = resp;
            }else{
                $scope.events.unshift(resp);
            }
            $scope.$apply();
        }
        
        function callbackExcluir(id){
            $scope.events = $scope.events.filter(function(e){
                return e.id !== id;
            });
            $scope.$apply();
        }

        $scope.excluir = function(id){
            TimelineFactory.excluir(id);
        }

        $scope.addEvent = function () {
            TimelineFactory.cadastrar({
                titulo:{
                    descricao: 'Descrição '+ new Date(),
                    tag: 'Gabriel',
                    data: new Date(),    
                },
                venda: {
                    nome: 'José',
                    valor: 1000
                },
                nrNotaFiscal: 555555,
                icon: 'glyphicon-credit-card',
                lucro: 500
            });

        };

        // optional: not mandatory (uses angular-scroll-animate)
        $scope.animateElementIn = function ($el) {
            $el.removeClass('timeline-hidden');
            $el.addClass('bounce-in');
        };

        // optional: not mandatory (uses angular-scroll-animate)
        $scope.animateElementOut = function ($el) {
            $el.addClass('timeline-hidden');
            $el.removeClass('bounce-in');
        };
        
        $scope.formatDate = function(date){
            return moment(date).fromNow();
        }
    };


})();
