var App = App || {};

App.Template = function() {
  'use strict'

  /**
   * Compile a template and data together, using Handlebars
   * @param  {object} element  [DOM element to replace html in]
   * @param  {object} data     [JSON data for filling the template]
   * @param  {string} template [the template from either ls or directly from the server (ex: /views/sprint.handlebars)]
   * @return {void}
   */
  function renderPage(element, data, templateName) {
    var render = templates( templateName );
    var html   = render( data );
    element.html(html);
  }

  return {
    renderPage: renderPage
  };
}();
