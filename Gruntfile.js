const timer = require('grunt-timer');
const moduleImporter = require('sass-module-importer');

module.exports = (grunt) => {
    timer.init(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                files: [{
                    cwd: 'src/jade',
                    src: ['**/*.jade', '!**/includes/*.jade'],
                    dest: 'dist',
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
                outputStyle: 'compressed',
                importer: moduleImporter()
            },
            dist: {
                files: {
                    'build/css/app.css': 'src/sass/app.sass'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['> 2%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Android >= 4', 'iOS >= 5', 'IE 10']
                    })
                ]
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'build/css/*.css',
                dest: 'dist/assets/stylesheets/'
            }
        },
        webpack: {
            build: {
                entry: './src/js/app.js',
                output: {
                    path: 'dist/assets/javascripts',
                    filename: 'app.js',
                },
                watch: true,
                module: {
                    loaders: [
                        {
                            test: /\.js?$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel',
                            query: {
                                presets: ['react', 'es2015', 'stage-0']
                            }
                        }
                    ]
                }
            }
        },
        copy: {
            img: {
                files: [{
                    cwd: 'src/i',
                    src: ['**/*'],
                    dest: 'dist/assets/images',
                    expand: true
                }]
            },
            fonts: {
                files: [{
                    cwd: 'src/fonts',
                    src: ['**/*'],
                    dest: 'dist/assets/fonts',
                    expand: true
                }]
            }
        },
        watch: {
            sass: {
                files: ['src/**/*.scss', 'src/**/*.sass'],
                tasks: ['sass']
            },
            css: {
                files: ['build/css/**/*.css'],
                tasks: ['postcss'],
                options: {
                    livereload: true,
                }
            },
            jade: {
                files: ['src/**/*.jade'],
                tasks: ['jade'],
                options: {
                    livereload: true,
                }
            },
            img: {
                files: 'src/i/**/*',
                tasks: ['copy:img']
            },
            fonts: {
                files: 'src/fonts/**/*',
                tasks: ['copy:fonts']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 3003,
                    base: 'dist'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', [
        'connect',
        'copy',
        'jade',
        'sass',
        'postcss',
        'webpack',
        'watch'
    ]);
}
