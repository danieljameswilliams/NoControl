module.exports     = function(mongoose) {
  var Schema         = mongoose.Schema;

  /* Schemas */
  var companySchema  = new Schema({
    _id                : Schema.ObjectId,
    name               : String,
    manager            : String,
    url                : String,
    notes              : Array,
    projects           : [{ type: Schema.ObjectId, ref: 'projects' }]
  });

  var projectSchema  = new Schema({
    _id                : Schema.ObjectId,
    name               : String,
    stories            : [{ type: Schema.ObjectId, ref: 'stories' }]
  });

  var storySchema    = new Schema({
    _id                : Schema.ObjectId,
    project_id         : String,
    company_id         : String,
    status             : Number,
    done               : Boolean,
    name               : String,
    tasks              : [taskSchema],
    activity           : [activitySchema]
  });

  /* Partial Schemas */
  var activitySchema = new Schema({
    type               : String,
    datetime           : String,
    user               : String
  });

  var taskSchema     = new Schema({
    description        : String,
    done               : Boolean
  });

  /* Models */
  var companyModel = mongoose.model('companies', companySchema);
  var projectModel = mongoose.model('projects', projectSchema);
  var storyModel   = mongoose.model('stories', storySchema);

  return {
    companies          : companyModel,
    stories            : storyModel
  };
}
