var App = App || {};

App.SprintLoad = function() {
  'use strict'

  var dom = {};

  function initialize() {
    _setupDOM();
    _addEventListeners();
  }

  function _setupDOM() {
    dom.$contentPlaceholder = $('.bodyDOM');
    dom.$headerSprintForm   = $('.js-header__sprint-select');
    dom.$headerSprintNum    = $('.js-sprint-select__weeknum');
    dom.$headerSprintButton = $('.js-quick__search-value');
  }

  function _addEventListeners() {
    dom.$headerSprintButton.on( 'click', onSprintSelectChange );
    dom.$headerSprintForm.on( 'submit', onSprintFormSubmitted );
  }

  function onSprintSelectChange() {
    var clickedButton = $(this);

    dom.$headerSprintButton.removeClass('is-selected');
    clickedButton.addClass('is-selected');

    dom.$headerSprintForm.submit();
  }

  function onSprintFormSubmitted(event) {
    var sprintNum  = dom.$headerSprintNum.val();
    var sprintTeam = dom.$headerSprintButton.filter('.is-selected').val();

    event.preventDefault();

    History.pushState( null, 'Sprint View', '/sprint/' + sprintNum + '/' + sprintTeam + '/' );
    $.get( '/sprint/' + sprintNum + '/' + sprintTeam + '/', { async: true }, function( data ) {
      App.Template.renderPage(dom.$contentPlaceholder, data, 'sprint');
    } );
  }

  return {
    initialize: initialize
  };
}();
