var app=angular.module("life",[]);
app.controller("lifectrl",function ($scope,$http) {
    $scope.age = function () {
        var year=$scope.h;

        var words = $http.get("http://localhost:8080/MyProject/integrate/"+year);
        words.success(function (data) {
            console.log(data);
            $scope.cal={"YEAR":data.YEAR,"LIFEEXPECTANCY":data.LIFEEXPECTANCY,"AGE":data.AGE};

        });
    }
});
