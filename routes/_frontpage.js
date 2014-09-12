module.exports = function(app, url, models) {

  app.get('/', function (req, res) {
    var querystring = url.parse(req.url, true);

    models.company.find({}, function (err, result) {
      if( querystring.query.async ) {
        res.json( result );
      }
      else {
        res.render('home', result);
      }
    });
  });
}
