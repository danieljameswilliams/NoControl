module.exports = function(app, url, models) {
  app.get('/company/:companyID', function (req, res) {
    var querystring = url.parse(req.url, true);
    var companyID = req.params.companyID;

    models.companies
      .findById( companyID)
      .populate('projects')
      .exec(function(err, result) {
        models.stories.populate( result.projects, { path: 'stories' }, function( err, data ) {
          if( querystring.query.async ) {
            res.json( result );
          }
          else {
            res.render( 'company', result );
          }
        } );
      });
  });
}
