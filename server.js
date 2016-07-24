var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mustache = require('mustache-express');
var PORT = process.env.PORT || 3000;

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', mustache());
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

console.log('Listening on Port ' + PORT + '...');
app.listen(PORT);
