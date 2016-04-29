var path = require('path');
var express = require('express');
var app = express();
var portNum = 3000;

var env = process.env.ENVIRONMENT;
var publicPath = env === 'DEV'? 'temp' :'public';

if(env === 'DEV'){
    require('./util/dev/contentCopy')();
}

app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, publicPath)));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(portNum, function () {
    console.log('env: ' + env + ', listening on port ' + portNum + '... ');
});

