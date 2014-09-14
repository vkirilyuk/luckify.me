/**
 * Browserify
 * For usage see https://github.com/jmreidy/grunt-browserify
 */
module.exports = function(grunt) {

	grunt.config.set('browserify', {
		client: {
			files: {
		    	'assets/js/client-bundle.js': ['client/main.jsx'],
		    },
		    options: {
		    	transform: ['reactify']
		    },
		    watch: false
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
};
