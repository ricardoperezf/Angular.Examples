angular.module("ToDoList", ["LocalStorageModule"])
    .controller("ToDoController", function ($scope, localStorageService) {
        $scope.todo = [];
        $scope.addActv = function () {
            $scope.todo.push($scope.newActv);
            $scope.newActv = {};
        }
    });
