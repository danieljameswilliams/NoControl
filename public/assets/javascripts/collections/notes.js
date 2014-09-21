var App = App || {};

App.Notes = Backbone.Collection.extend({
  model: App.CompanyNote,
  url: function() {
    return '/company/' + App.Company.id + '/notes';
  },
  idAttribute: "_id"
});
