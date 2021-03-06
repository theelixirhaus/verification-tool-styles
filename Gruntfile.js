'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/styles.css' : 'assets/scss/styles.scss'
				}
			}
		},
		watch: {
			all: {
				files: 'index.html', // Change this if you are not watching index.html
				options: {
					livereload: true  // Set livereload to trigger a reload upon change
				}
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			options: {
				livereload: true, // Set livereload to trigger a reload upon change
			}
		}
	});

	// Load these required NPM tasks:
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['watch']); // This registers the watch task as the default task. If you require more tasks, create another one

};