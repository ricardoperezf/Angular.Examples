angular.module("MyFirsApp", [])
    .controller("FirstController", function ($scope) {
        $scope.nombre = "Ricardo";
        $scope.nuevoComentario = {};
        $scope.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "ricardoperez"
        },
            {
                comentario: "Mal tutorial",
                username: "javierfreites"
        }
        ];
        $scope.agregarComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
        }
    });
