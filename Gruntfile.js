module.exports = function(grunt) {
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
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', '> 1%', 'Firefox ESR', 'Opera 12.1' ]
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
        tasks: ['copy:js']
      },
      css: {
        files: ['source/css/**/*.css'],
        tasks: ['autoprefixer']
      },
      jade: {
        files: ['source/**/*.jade'],
        tasks: ['jade']
      },
      compass: {
        files: ['source/**/*.scss', 'source/**/*.sass' ],
        tasks: ['compass']
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
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svg2png');

  grunt.registerTask('default', [
    'connect',
    'copy',
    'jade',
    'compass',
    'autoprefixer',
    'svg2png',
    'watch'
  ]);
}
