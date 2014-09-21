var App = App || {};

App.GeneralView = Backbone.View.extend({
  el: $('.bodyDOM'),
  events: {
    'submit .notes__create-form': 'noteCreate',
  },
  noteCreate: function( event ) {
    event.preventDefault();

    var notesCollection = new App.Notes();
    notesCollection.create({
      note: $(event.target[0]).val()
    });
    App.NewNote = $(event.target[0]).val()
    App.MyCompanyNote.render();

    $(event.target[0]).val('').focus()
  }
});

$(function() {
  new App.GeneralView();

  App.Company = {
    id: $('body').data('company')
  };

});
