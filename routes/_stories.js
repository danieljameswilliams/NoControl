module.exports = function(app, url, models) {

  app.get('/stories', function (req, res) {
    models.stories.find({}, function (err, result) {
      res.json( result );
    });
  });

  app.get('/stories/:storyID', function (req, res) {
    var storyID = req.params.storyID;

    models.stories.find({ _id: storyID }, function (err, result) {
      res.json( result );
    });
  });
}
