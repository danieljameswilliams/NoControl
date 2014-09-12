var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var path = require('path');
var url = require('url');

var app = express();
var viewsFolder = __dirname + '/public/views';

app.use(express.static(__dirname + '/public'));
app.engine( 'handlebars', exphbs(
{
  defaultLayout: viewsFolder + '/layouts/master',
  layoutsDir: viewsFolder + '/layouts',
  partialsDir: viewsFolder + '/partials'
}) );
app.set('view engine', 'handlebars');
app.set('views', viewsFolder);

var models = require('./models/_all')(mongoose);
var client = mongoose.connect('mongodb://nozebra:jyj49gfa@kahana.mongohq.com:10019/nozebra_nocontrol');
var db = mongoose.connection;

db.once('open', function() {
  var frontpage = require('./routes/_frontpage')(app, url, models);
  var frontpage = require('./routes/_company')(app, url, models);
  var sprint = require('./routes/_sprint')(app, url, models);
});

app.listen(3000);
