var App = App || {};

App.Template = function() {
  'use strict'

  /**
   * Checks if there is a template in [localStorage], if-true we check if it is the newest.
   * @param  {string} storageName        [the name, that is used to save the template to localStorage]
   * @param  {string} templateName       [the filename ex. sprint.handlebars, without the extension]
   * @param  {string} storageVersionName [the name, that is used to save the version of the template to localStorage]
   * @return {void}
   */
  function handleTemplate(storageName, templateName, storageVersionName) {
    var lsSprintTemplate = localStorage.getItem(storageName);
    var currentTemplateVersion = '0.0.0';

    try {
      $.when( $.get( '/versions/' + storageName) ).then(function( data, textStatus, jqXHR ) {
        currentTemplateVersion = data.version;

        if( lsSprintTemplate !== null ) {
          var lsSprintTemplateVersion = localStorage.getItem(storageVersionName);

          if( lsSprintTemplateVersion !== currentTemplateVersion ) {
            App.Template.fetchNewestTemplate(templateName, storageName, storageVersionName, currentTemplateVersion);
          }
        }
        else {
          App.Template.fetchNewestTemplate('sprint', 'sprintTemplate', 'sprintTemplateVersion', currentTemplateVersion);
        }
      });
    } catch(err) {
      console.log('Could not check for new site templates - Because you have no internet connection');
    }
  }

  /**
   * Gets the newest template to be saved in localStorage, and used upon refresh.
   * @param  {string} templateName [the filename ex. sprint.handlebars, without the extension]
   * @param  {string} storageName  [the name, that is used to save the template to localStorage]
   * @return {string}              [the new template, directly from the server]
   */
  function fetchNewestTemplate(templateName, storageName, storageVersionName, storageVersion) {
    $.get( '/views/' + templateName + '.handlebars', function( data ) {
      var updatedTemplate = data;

      // TODO: Change the template, or notify the user that UI is old, and ask to refresh.
      localStorage.setItem( storageName , data.toString() );

      // TODO: Get the version of the collected template.
      localStorage.setItem( storageVersionName , storageVersion );

      return updatedTemplate;
    });
  }

  /**
   * Compile a template and data together, using Handlebars
   * @param  {object} data     [JSON data for filling the template]
   * @param  {string} template [the template from either ls or directly from the server (ex: /views/sprint.handlebars)]
   * @return {void}
   */
  function renderPage(DOM, data, template) {
    var render = Handlebars.compile( template );
    var html   = render( data );
    DOM.html(html);
  }

  return {
    renderPage: renderPage,
    fetchNewestTemplate: fetchNewestTemplate,
    handleTemplate: handleTemplate
  };
}();
