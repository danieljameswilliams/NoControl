var App = App || {};

App.Stories = Backbone.Collection.extend({
  model: App.ModelsStory,
  url: '/stories',
  idAttribute: "_id", // How do i connect _id with data-id on the DOM elements.
  events: {
      'update-sort': 'updateSort'
  },
  updateSort: function(event, model, position) {
    // var sortIndex = item.index;
    // var column = $(item).parent().data('status');

    console.log( 'From Collection' );
  }
});

