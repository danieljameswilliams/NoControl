module.exports = function(app, url, models) {

  app.get('/company/:companyID', function (req, res) {
    var querystring = url.parse(req.url, true);
    var companyID = req.params.companyID;

    models.companies
      .findById( companyID )
      .populate('projects')
      .exec(function(err, result) {
        models.stories.populate( result.projects, { path: 'stories' }, function( err, data ) {
          result.companyID = companyID;

          if( querystring.query.async ) {
            res.json( result );
          }
          else {
            res.render( 'company', result );
          }
        } );
      });
  });

  app.get('/company/:companyID/notes', function (req, res) {
    var querystring = url.parse(req.url, true);
    var companyID = req.params.companyID;

    models.companies
      .findById( companyID )
      .exec(function(err, result) {
        res.json( result.notes );
      });
  });

  app.post('/company/:companyID/notes', function (req, res) {
    var companyID = req.params.companyID;

    var note = req.body.note;
    models.companies.update({ _id: companyID }, { $push: { notes: note } }, function (err, note) {
      if (err) throw err;

      res.json( { note: req.body.note } );
    });

  });

}
