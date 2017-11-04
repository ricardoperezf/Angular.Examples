angular.module("MyFirsApp", [])
    .controller("FirstController", function ($scope, $http) {
        $scope.posts = [];
        var vector = [];
        $http.get("http://192.168.0.15:5000/api/v1")
            .then(function (datos) {
                    console.log(datos);
                    $scope.posts = datos.data;
                    $scope.numero = [];
                    angular.forEach($scope.posts, function (value) {
                        $scope.numero.push(value.numero);
                    });
                    console.log($scope.numero);
                },
                function (error) {
                    console.log(error);
                });
    });
