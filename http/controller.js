angular.module("MyFirsApp", [])
    .controller("FirstController", function ($scope, $http) {
        $scope.posts = [];
        $http.get("http://192.168.0.15:5000/api/v1")
            .then(function (datos) {
                    console.log(datos);
                    $scope.posts = datos.data;
                },
                function (error) {
                    console.log(error);
                });
    });
