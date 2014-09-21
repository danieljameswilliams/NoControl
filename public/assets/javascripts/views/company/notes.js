var App = App || {};

App.CompanyNoteView = Backbone.View.extend({
  el: $('.notes__item'),
  initialize: function() {
    this.$list = $('.notes__list');
  },
  render: function() {
    this.$list.append( App.NewNote );
  }
});

$(function() {
  App.MyCompanyNote = new App.CompanyNoteView();
});
