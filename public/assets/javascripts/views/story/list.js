var Views = Views || {};

Views.Story = function() {
  var list = Backbone.View.extend();

  var list_item = Backbone.View.extend({
    tagName: 'div',
    className: 'backlog__story',
    events: {
      'drop' : 'drop'
    },
    drop: function(event, index) {
      console.log( 'Dropped' );
      // Update Column Order
      //this.model.save( { position: index }, { success, error });

      // Reset View for the next sortable
      ui.item.removeClass('is-dragging');
      $('html').unbind('mousemove', ui.item.data('move_handler'));
      ui.item.removeData('move_handler');
    }
  });

  var detail = Backbone.View.extend();

  return {
    list      : list,
    list_item : list_item,
    detail    : detail
  };
}
