var express = require('express');
var request = require('request');

var app = express();
app.use('/', function(req, res) {
    var url = "https://getchef.zendesk.com/api/v2/" + req.url;
    req.pipe(request(url)).pipe(res);
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.error(req.headers);
});

app.listen(process.env.PORT || 3000);  
