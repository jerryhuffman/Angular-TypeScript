import express = require('express');
import http = require('http');
import path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 1337);
//app.set('port', String(1337));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

//Store all HTML files in view folder.
////app.use(express.static(__dirname + '/view'));
//app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(__dirname));
//Store all CSS in Styles folder.
//app.use(express.static(path.join(__dirname, 'styles')));
//Store all JS in Scripts folder.
//app.use(express.static(path.join(__dirname, 'scripts')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function (req, res) {
    res.sendfile('index.html');
    //It will find and locate index.html from View or Scripts
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
