var express = require('express');
var app = express();
var request = require('request');
app.get('/getdata/:id', function (req, res) {
    var result={
        'body': []
    };

    request('http://apilayer.net/api/validate?access_key=3e64b697c319ccc3d1b3511f7b1f1a30&vat_number='+req.params.id, function (error,response,body) {
        if(error){
            return console.log('Error:', error);
        }

        if(response.statusCode !== 200){
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        body = JSON.parse(body);
        conti = body;
console.log(conti)
            sentiment = conti.valid;
            
        request('https://api.uclassify.com/v1/uclassify/sentiment/Classify?readkey=MD03b83ppKsp&text='+sentiment, function (error, response, body1) {

            if (error) {
                return console.log('Error:', error);
            }

            if (response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode);
            }

            body1 = JSON.parse(body1);
            weath = body1;
            console.log(weath);
                result.body.push({"valid": conti.valid,"database": conti.database,"format_valid": conti.format_valid,"query": conti.query,"country_code":conti.country_code,"vat_number":conti.vat_number,"company_name":conti.company_name,"company_address":conti.company_address,"positive":weath.positive,"negative":weath.negative});
            res.contentType('application/json');
            res.write(JSON.stringify(result));
            res.end();

        });
    });

})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    })