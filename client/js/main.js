var app = angular.module('yoda', []);


app.controller('yodaController', ['$scope', '$http', function ($scope, $http) {

    console.log('here in controller')
    $scope.yoda = {};
    $scope.getTranslation = function () {
        $http.post('/yoda', $scope.yoda)
            .success(function (data) {
                $scope.yoda = {};
                  $scope.yodaData = data;
            })
            .error(function (error) {
                console.log(error)
            });
    };

}]);