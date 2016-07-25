(function () {
    'use strict';

    'use strict';
    angular.module('timeline')
        .controller('VendaCtrl', VendaCtrl);

    function VendaCtrl(TimelineFactory, $scope) {
        var vm = this;
        vm.item = {};

        vm.cadastrar = function () {
            TimelineFactory.cadastrar(vm.item);
            $scope.formulario.$setPristine();
            $scope.formulario.$setUntouched();
            vm.item = {};
        };
    };
})();
