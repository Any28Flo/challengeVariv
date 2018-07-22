module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
        watch: {
            files: '*.css',
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                      'assets/css/*.css',
                      'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: ''
                }
            }
          }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', [ 'browserSync' , 'watch']);
};
