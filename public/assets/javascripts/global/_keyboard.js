var App = App || {};

App.Keyboard = function() {
  'use strict'

  var dom = {};

  function initialize() {
    _setupDOM();
    _addEventListeners();
  }

  function _setupDOM() {
    dom.$keyboardBody = $('.js-listen-to-keyboard');
    dom.$input        = $('input');
    dom.$keyCode      = $('[data-keycode]');
  }

  function _addEventListeners() {
    dom.$input.on( 'keyup', stopPropagation );
    dom.$keyboardBody.on( 'keyup', onKeyUp );
  }

  function onKeyUp(event) {
    var code = (event.keyCode || event.which);
    dom.$keyCode.each(function() {
      var item = $(this);
      if( code == item.data('keycode') ) {
        item.trigger('click');
      }
    });
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  function updateKeyCodeCache() {
    dom.$keyCode = $('[data-keycode]');
  }

  return {
    initialize: initialize,
    updateKeyCodeCache: updateKeyCodeCache
  };
}();
