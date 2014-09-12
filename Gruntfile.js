module.exports = function(grunt) {
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "Views.Templates"
        },
        files: {
          "public/assets/javascripts/templates.js": ["public/views/*.handlebars", "public/views/layouts/*.handlebars", "public/views/partials/*.handlebars"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
};
