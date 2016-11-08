var app=angular.module("calculate",[]);
app.controller("calculatectrl",function ($scope,$http) {
    $scope.get = function () {
        var vat=$scope.n;

        var words = $http.get("http://127.0.0.1:8081/getdata/"+vat)
        words.success(function (data) {
            console.log(data);

            $scope.details={"valid":data.body[0].valid,"database":data.body[0].database,"format_valid":data.body[0].format_valid
            ,"query":data.body[0].query,"country_code":data.body[0].country_code,"vat_number":data.body[0].vat_number,
                "company_name":data.body[0].company_name,"company_address":data.body[0].company_address,"positive":data.body[0].positive,"negative":data.body[0].negative
            };
        });
    }
});