var App = App || {};

//Nested Views
App.StoryListView = Backbone.View.extend({
  el: $('.backlog__story'),

  render: function() {
    this.collection.each(this.appendModelView, this);
    return this;
  },
  initialize: function() {
    _initSortable();
    var storiesList = new App.Stories();
    storiesList.fetch();

    _.bindAll(this, 'drop');
  },
  events: {
    'drop' : 'drop'
  },
  drop: function(event, item) {
    console.log(this.model);
    // console.log(item);
    // this.$el.trigger( 'update-sort' [this.model, item.index] );
    //console.log( 'Dropped' );
  }
});

$(function() {
  new App.StoryListView();
})

function _initSortable() {
  $( '.js-story__column' ).sortable({
    connectWith: '.js-story__column',
    start: function (event, ui) {
      ui.item.addClass('is-dragging');
    },
    stop: function (event, ui) {
      ui.item.trigger( 'drop', ui.item);
    }
  });
}
