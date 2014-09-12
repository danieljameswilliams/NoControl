module.exports = function(app, db, url, Schema, schemasAndModels) {
  app.get('/versions/:template', function (req, res) {
    var viewVersions = {
      sprintPage: { name: 'sprintTemplate', file: 'sprint.handlebars', version: '0.0.3' }
    };
    var inputVersion = req.params.template;

    // TODO: Connect to a database, and return the version of the [inputVersion]-template.
    res.json( viewVersions.sprintPage );
  });
}
