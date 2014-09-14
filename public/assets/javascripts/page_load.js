var App = App || {};
var Views = Views || {};

$(document).ready(function() {
  App.Keyboard.initialize();
  App.SprintLoad.initialize();

  $( '.js-story__column' ).sortable({
    connectWith: '.js-story__column',
    start: function (event, ui) {
      ui.item.addClass('is-dragging');
    },
    stop: function (event, ui) {
      ui.item.trigger( 'drop', ui.item.index() );
    }
  });

});

/**
 * API:
 *   App.Keyboard.updateKeyCodeCache();
 **/
