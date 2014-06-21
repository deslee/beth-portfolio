module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-loopback-angular');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        loopback_angular: {
            services: {
                options: {
                    input: './server/app.js',
                    output: './app/components/lb-services.js'
                }
            }
        },
        bower_concat: {
            all: {
                dest: 'build/vendor.js'
            }
        },
        ngtemplates: {
            app: {
                cwd: './app',
                src: '*/**/*.html',
                dest: './build/templates.js'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: ['./app/**/*.js'],
                dest: './build/app.js'
            },
            css: {
                src: ['./app/**/*.css'],
                dest: './build/style.css'
            },
            vendorCss: {
                src: ['./bower_components/**/*.css', './bower_components/**/foundation.css', '!./bower_components/**/*.min.css'],
                dest: './build/vendor.css'
            }
        },
        copy: {
            index: {
                // apparently expand is needed for cwd...
                files: [
                    {expand: true, cwd: 'app', src: ['index.html'], dest: 'build/', filter: 'isFile'}
                ]
            },
            images: {
                // apparently expand is needed for cwd...
                files: [
                    {expand: true, cwd: 'app', src: ['**/*.jpg','**/*.png','**/*.gif'], dest: 'build/', filter: 'isFile'}
                ]
            }
        },
        watch: {
            scripts: {
                files: ['./app/**/*.js'],
                tasks: ['concat:js'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['./app/**/*.css'],
                tasks: ['concat:css'],
                options: {
                    spawn: false
                }
            },
            templates: {
                files: ['./app/*/**/*.html'],
                tasks: ['ngtemplates'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['./app/*.html'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', [
        'bower_concat', 'ngtemplates', 'concat', 'copy', 'watch'
    ]);

    grunt.registerTask('loopback', [
        'loopback_angular', 'docular',
    ])
};