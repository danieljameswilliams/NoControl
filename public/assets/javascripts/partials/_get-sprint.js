var App = App || {};

App.SprintLoad = function() {
  'use strict'

  var dom = {};

  function initialize() {
    _setupDOM();
    _addEventListeners();
  }

  function _setupDOM() {
    dom.$keyboardBody       = $('.js-listen-to-keyboard');
    dom.$contentPlaceholder = $('.bodyDOM');
    dom.$headerSprintForm   = $('.js-header__sprint-select');
    dom.$headerSprintNum    = $('.js-sprint-select__weeknum');
    dom.$headerSprintButton = $('.js-quick__search-value');
    dom.$input              = $('input');
  }

  function _addEventListeners() {
    dom.$input.on( 'keyup', stopPropagation );
    dom.$keyboardBody.on( 'keyup', onSprintKeyUp );
    dom.$headerSprintButton.on( 'click', onSprintSelectChange );
    dom.$headerSprintForm.on( 'submit', onSprintFormSubmitted );
  }

  // TODO: [BUG] - Submit is triggered before click event, why i don't know.
  function onSprintKeyUp(event) {
    var code = (event.keyCode || event.which);
    dom.$headerSprintButton.each(function() {
      var item = $(this);
      if( code == item.data('keycode') ) {
        item.trigger('click');
      }
    });
  }

  function onSprintSelectChange() {
    var clickedButton = $(this);

    dom.$headerSprintButton.removeClass('is-selected');
    clickedButton.addClass('is-selected');

    dom.$headerSprintForm.submit();
  }

  function onSprintFormSubmitted(event) {
    // TODO: Show the chosen sprint
    // Execute on client-side, but secure that it has a push-state with fallback
    var sprintNum  = dom.$headerSprintNum.val();
    var sprintTeam = dom.$headerSprintButton.filter('.is-selected').val();

    event.preventDefault();

    History.pushState( null, 'Sprint View', '/sprint/' + sprintNum + '/' + sprintTeam + '/' );
    $.get( '/sprint/' + sprintNum + '/' + sprintTeam + '/', { async: true }, function( data ) {
      if( sprintTemplate.length !== null ) {
        App.Template.renderPage(dom.$contentPlaceholder, data, sprintTemplate);
      }
    } );
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return {
    initialize: initialize
  };
}();
