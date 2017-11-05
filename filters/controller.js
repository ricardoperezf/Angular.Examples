angular.module("mainModule", [])
    .filter("removeHTML", function () {
        return function (texto) {
            return String(texto).replace(/<[^>]+>/gm, "");
        }
    })
    .controller("FirstController", function ($scope) {
        $scope.mi_html = {};
        $scope.mi_html.title = "<p>Hola mundo</p>"
        $scope.mi_html.body = "<p>Hola mundo Ricardo</p>"
        $scope.mi_html.costo = 2;
    });
