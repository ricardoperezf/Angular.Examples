angular.module("MyFirsApp", [])
    .controller("FirstController", function ($scope, $http) {
        $scope.posts = [];
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function (datos) {
                    console.log(datos);
                    $scope.posts = datos.data;
                },
                function (error) {
                    console.log(error);
                });
    });
