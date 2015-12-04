var timer = require("grunt-timer");

module.exports = function(grunt) {
timer.init(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        files: [{
          cwd: 'source/jade',
          src: ['**/*.jade', '!**/includes/*.jade'],
          dest: 'dest',
          expand: true,
          ext: '.html'
        }]
      },
      options: {
        pretty: true,
      }
    },
    sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed'
        },
        dist: {
            files: {
                'source/css/app.css': 'source/sass/app.sass'
            }
        }
    },
    autoprefixer: {
      options: {
        browsers: [ '> 2%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Android >= 4', 'iOS >= 5', 'IE 10' ]
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'source/css/*.css',
        dest: 'dest/assets/stylesheets/'
      },
    },
    svg2png: {
      all: {
        files: [
          {
              src: ['source/i/**/*.svg']
          }
        ]
      }
    },
    copy: {
      js: {
        files: [{
          cwd: 'source/js',
          src: ['**/*.js'],
          dest: 'dest/assets/javascripts',
          expand: true,
        }]
      },
      img: {
        files: [{
          cwd: 'source/i',
          src: ['**/*'],
          dest: 'dest/assets/images',
          expand: true,
        }]
      },
      fonts: {
        files: [{
          cwd: 'source/fonts',
          src: ['**/*'],
          dest: 'dest/assets/fonts',
          expand: true,
        }]
      }
    },
    watch: {
      js: {
        files: ['source/js/**/*.js'],
        tasks: ['copy:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['source/css/**/*.css'],
        tasks: ['autoprefixer'],
        options: {
          livereload: true,
        }
      },
      jade: {
        files: ['source/**/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true,
        }
      },
      sass: {
        files: ['source/**/*.scss', 'source/**/*.sass' ],
        tasks: ['sass']
      },
      img: {
        files: 'source/i/**/*',
        tasks: ['copy:img']
      },
      fonts: {
        files: 'source/fonts/**/*',
        tasks: ['copy:fonts']
      }
    },
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 3003,
          base: 'dest'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-svg2png');

  grunt.registerTask('default', [
    'connect',
    'copy',
    'jade',
    'sass',
    'autoprefixer',
    // 'svg2png',
    'watch'
  ]);
}
