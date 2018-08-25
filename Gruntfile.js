module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

		project: {
			src: 'src/',
			s_css: '<%= project.src %>styles/',
			s_js: '<%= project.src %>js/',
			dest: 'dist/',
			d_css: '<%= project.dest %>css/',
			css_ven: '<%= project.d_css %>vendor/',
			d_js: '<%= project.dest %>js/',
			js_ven: '<%= project.d_js %>vendor/'
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						src: 'node_modules/jquery/dist/jquery.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/prism.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/themes/prism.min.css',
						dest: '<%= project.css_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.css',
						dest: '<%= project.css_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/prismjs/plugins/toolbar/prism-toolbar.min.css',
						dest: '<%= project.css_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/screenfull/dist/screenfull.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					},
                    {
						expand: true,
						flatten: true,
						src: 'node_modules/jquery-touchswipe/jquery.touchSwipe.min.js',
						dest: '<%= project.js_ven %>',
						filter: 'isFile'
					}
				]
			}
		},

		//Compress and minify
		uglify: {
			dev: {
				files: {
					'<%= project.d_js %>threesixty.min.js': '<%= project.s_js %>threesixty.js',
					'<%= project.d_js %>custom.min.js': '<%= project.s_js %>custom.js'
				}
			},
			dist: {
				files: {
					'<%= project.d_js %>threesixty.min.js': '<%= project.s_js %>threesixty.js',
					'<%= project.d_js %>custom.min.js': '<%= project.s_js %>custom.js'
				}
			}
		},

		// Compile Sass
		sass: {
			options: {
				soureceMap: true
			},
			dev: {
				files: {
					'<%= project.d_css %>threesixty.unprefixed.css': '<%= project.s_css %>threesixty.scss',
					'<%= project.d_css %>custom.unprefixed.css': '<%= project.s_css %>custom.scss',
					'<%= project.d_css %>ie.unprefixed.css': '<%= project.s_css %>ie.scss'
				}
			},
			dist: {
				files: {
					'<%= project.d_css %>threesixty.unprefixed.css': '<%= project.s_css %>threesixty.scss',
					'<%= project.d_css %>custom.unprefixed.css': '<%= project.s_css %>custom.scss',
					'<%= project.d_css %>ie.unprefixed.css': '<%= project.s_css %>ie.scss',
					'<%= project.css_ven %>bootstrap.unprefixed.css': '<%= project.s_css %>bootstrap.scss'
				}
			}
		},

		//postcss
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: [
							'last 2 version',
							'safari 6',
							'ie 9',
							'opera 12.1',
							'ios 6',
							'android 4'
						]
					}),
					require('cssnano')({
						zindex: false,
						colormin: false
					})
				]
			},
			dev: {
				files: {
					'<%= project.d_css %>threesixty.min.css': '<%= project.d_css %>threesixty.unprefixed.css',
					'<%= project.d_css %>custom.min.css': '<%= project.d_css %>custom.unprefixed.css',
					'<%= project.d_css %>ie.min.css': '<%= project.d_css %>ie.unprefixed.css'
				}
			},
			dist: {
				files: {
					'<%= project.d_css %>threesixty.min.css': '<%= project.d_css %>threesixty.unprefixed.css',
					'<%= project.d_css %>custom.min.css': '<%= project.d_css %>custom.unprefixed.css',
					'<%= project.d_css %>ie.min.css': '<%= project.d_css %>ie.unprefixed.css',
					'<%= project.css_ven %>bootstrap.min.css': '<%= project.css_ven %>bootstrap.unprefixed.css'
				}
			}
		},

		clean: {
			dev: [
				'<%= project.d_css %>threesixty.unprefixed.css',
				'<%= project.d_css %>threesixty.unprefixed.css.map',
				'<%= project.d_css %>custom.unprefixed.css',
				'<%= project.d_css %>custom.unprefixed.css.map',
				'<%= project.d_css %>ie.unprefixed.css',
				'<%= project.d_css %>ie.unprefixed.css.map'
			],
			dist: [
				'<%= project.d_css %>threesixty.unprefixed.css',
				'<%= project.d_css %>threesixty.unprefixed.css.map',
				'<%= project.d_css %>custom.unprefixed.css',
				'<%= project.d_css %>custom.unprefixed.css.map',
				'<%= project.d_css %>ie.unprefixed.css',
				'<%= project.d_css %>ie.unprefixed.css.map',
				'<%= project.css_ven %>bootstrap.unprefixed.css',
				'<%= project.css_ven %>bootstrap.unprefixed.css.map'
			]
		},

		//Project banner
		tag: {
			banner: '/*! <%= pkg.name %> <% grunt.template.today("yyy-mm-dd") %> version <%= pkg.version %> */\n'+'/* <%= pkg.repository.url %> */\n'
		},

		usebanner: {
			taskName: {
				options: {
					position: 'top',
					banner: '<%= tag.banner %>',
					linebreak: true
				},
				files: {
					src: ['<%= project.d_css %>threesixty.css', '<%= project.d_js %>threesixty.js']
				}
			}
		},

		//JSHint
		jshint: {
			files: [
				'src/**/*.js',
				'gruntfile.js'
			],
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: false,
				browser: true,
				quotmark: 'single',
				globals: {
					jQuery: true
				},
				'-W030': true
			}
		},

		//Watch & update on the fly
		watch: {
			scripts: {
				files: ['<%= project.s_js %>*.js'],
				tasks: ['jshint', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: '<%= project.s_css %>*.scss',
				tasks: ['sass:dev', 'postcss:dev', 'clean:dev'],
				options: {
					spawn: false
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/css/*.css',
						'dist/js/**/**.js',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					proxy: 'threesixty-slider.sites.local'
				}
			}
		}
	});

    //Run 'grunt'
    grunt.registerTask('default', [
        'copy',
        'sass:dev',
        'postcss:dev',
		'clean:dev',
        'jshint',
		'uglify:dev',
        'usebanner',
		'browserSync',
		'watch'
    ]);

    //Run 'grunt build'
    grunt.registerTask('build', [
        'copy',
        'sass:dist',
        'postcss:dist',
        'clean:dist',
        'jshint',
        'uglify:dist',
        'usebanner'
    ]);
};
