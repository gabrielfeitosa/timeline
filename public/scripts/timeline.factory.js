(function () {
    'use strict';

    angular.module('timeline')
        .factory('TimelineFactory', function () {
            var socket = io();

            return {
                entrar: entrar,
                cadastrar: cadastrar,
                excluir: excluir
            };

            function entrar(callBackVendas, callBackExcluir) {
                socket.emit('entrar');
                socket.on('venda', callBackVendas);
                socket.on('excluir', callBackExcluir);
            }

            function cadastrar(texto) {
                socket.emit('venda', texto);
            }

            function excluir(id) {
                socket.emit('excluir', id);
            }

        });
})();