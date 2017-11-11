angular.module("MyFirsApp", [])
    .controller("FirstController", function ($scope, $http) {
        $scope.posts = [];
        $scope.newPost = {};
        $http.get("http://192.168.0.15:5000/api/v1")
            .then(function (datos) {
                    console.log(datos);
                    $scope.posts = datos.data;
                },
                function (error) {
                    console.log(error);
                });
        $scope.addPost = function () {
            $http.post("http://192.168.0.15:5000/api/v1", {
                    usuario: $scope.newPost.usuario
                })
                .then(function (data, status, headers, config) {
                    console.log(data);
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};

                }, function (error, status, headers, config) {
                    console.log(error);
                });
        };
    });
