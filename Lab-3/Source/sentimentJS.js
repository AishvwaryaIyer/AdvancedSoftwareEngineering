var app=angular.module("Sentiments",[]);
app.controller("Sentiment1",function ($scope,$http) {
    $scope.findSentiment = function () {
        var text1=$scope.findSentimentF;
        var words = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8&outputMode=json&text=" +inputTxt.value)
        words.success(function (data) {
            console.log(data);
            $scope.Sentimentlang={"sentiment":data.docSentiment.type,"score":data.docSentiment.score
                ,"language":data.language};
            document.getElementById('div_List').style.display = 'block';
        });
    }


});