module.exports = function(app, db, url, Schema, schemasAndModels) {
  app.get('/sprint/:sprintNum/:teamSysName', function (req, res) {
    var urlParameters = url.parse(req.url, true);
    var sprintNum = req.params.sprintNum;
    var teamSysName = req.params.teamSysName;

    schemasAndModels.models.stories.find({ sprints: '540ee758454c6130c400035c' }, function (err, result) {
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

      if( urlParameters.query.async ) {
        res.json( objectedResult );
      }
      else {
        res.render('sprint', objectedResult);
      }
    });
  });
}
