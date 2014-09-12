module.exports = function(app, url, models) {
  app.get('/company/:companyID', function (req, res) {
    var querystring = url.parse(req.url, true);
    var companyID = req.params.companyID;

    models.stories.find({ company_id: companyID }, function (err, result) {
      var objectedResult = {
        icebox: [],
        backlog: {
          todo: [],
          inProgress: [],
          qa: []
        },
        done: []
      };

      // 0: Icebox, 1: Todo, 2: In Progress, 3: QA, 4: Done
      for(var i = 0; i < result.length; i++) {
        if( result[i].status == 0 ) {
          objectedResult.icebox.push( result[i] );
        }
        else if( result[i].status == 1 ) {
          objectedResult.backlog.todo.push( result[i] );
        }
        else if( result[i].status == 2 ) {
          objectedResult.backlog.inProgress.push( result[i] );
        }
        else if( result[i].status == 3 ) {
          objectedResult.backlog.qa.push( result[i] );
        }
        else if( result[i].status == 4 ) {
          objectedResult.done.push( result[i] );
        }
      }

      if( querystring.query.async ) {
        res.json( objectedResult );
      }
      else {
        res.render('company', objectedResult);
      }
    });
  });
}
