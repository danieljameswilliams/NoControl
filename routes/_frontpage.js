module.exports = function(app, db, url, Schema, schemasAndModels) {
  app.get('/', function (req, res) {
    var urlParameters = url.parse(req.url, true);

    schemasAndModels.models.company.find({}, function (err, result) {
      if( urlParameters.query.async ) {
        res.json( result );
      }
      else {
        res.render('home', result);
      }
    });
  });
}
