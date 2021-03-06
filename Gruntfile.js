module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                src: ['scss/napkin.scss'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },
        concat: {
         dist: {
           src: [
             'scss/napkin.scss', 'bower_components/page-scroll-effects/scss/style.scss'
           ],
           dest: 'scss/napkinstyle.scss',
         }
       },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        jshint: {
            all: ['js/**/*.js']
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['sass']);
    grunt.registerTask('dist', ['sass', 'cssmin']);
}
