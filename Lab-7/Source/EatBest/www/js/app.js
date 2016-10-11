


angular.module('myApp', [])


    .controller('HomeCtrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("place").value;
            var searchQuery = document.getElementById("eat").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
                document.getElementById('div_ReviewList').style.display = 'none';
           
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=UTMJ52WIGPMFXV1EC0SYBX1PRSIAOZZYIE322CUWKOOCLUER" +
                    "&client_secret=WQGTGNN2KFZUOS1TCVJXGB2GFHLHVK0I5SZ4HKX1QN1GWDBN" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);
                handler.success(function (data) {

                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        for (var i = 0; i < data.response.venues.length; i++) {
                            $scope.venueList[i] = {
                                "name": data.response.venues[i].name,
                                "id": data.response.venues[i].id,
                                "location": data.response.venues[i].location
                            };
                        }
                    }

                })
                handler.error(function (data) {
                    alert("ERROR");
                });
            }
        }
        $scope.getReviews = function (venueSelected) {
            if (venueSelected != null) {
             
                var handler = $http.get("https://api.foursquare.com/v2/venues/" + venueSelected.id + "/tips" +
                    "?sort=recent" +
                    "&client_id=Q0ENF1YHFTNPJ31DCF13ALLENJW0P5MTH13T1SA0ZP1MUOCI" +
                    "&client_secret=ZH4CRZNEWBNTALAE3INIB5XG0QI12R4DT5HKAJLWKYE1LHOG&v=20160215" +
                    "&limit=5");
                handler.success(function (result) {
                    if (result != null && result.response != null && result.response.tips != null &&
                        result.response.tips.items != null) {
                        $scope.mostRecentReview = result.response.tips.items[0];
                      
                        var callback = $http.get("https://api.uclassify.com/v1/uclassify/sentiment/Classify?readkey=MD03b83ppKsp&text=" + $scope.mostRecentReview.text);
                        callback.success(function (data) {
                            if(data!=null)
                            {
                                $scope.ReviewWithSentiment = {"positive" : data.positive,
                                                            "negative":data.negative
                                                               };
                                document.getElementById('div_ReviewList').style.display = 'block';


                            }
                        })
                    }
                })
                handler.error(function (result) {
                    alert("ERROR.")
                })
            }

        }

    });
