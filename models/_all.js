module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var schemaCompany = new Schema({
    name: String,
    manager: String,
    url: String
  });

  var activitySchema = new Schema({
    type: String,
    datetime: String,
    user: String
  });

  var tasksSchema = new Schema({
    description: String,
    done: Boolean
  });

  var schemaStories = new Schema({
    _id: Schema.ObjectId,
    project_id: String,
    company_id: String,
    status: Number,
    done: Boolean,
    name: String,
    tasks: [tasksSchema],
    activity: [activitySchema]
  });

  var modelCompany = mongoose.model('companies', schemaCompany);
  var modelStories = mongoose.model('stories', schemaStories);

  return {
    company: modelCompany,
    stories: modelStories
  };
}
