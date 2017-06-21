module.exports = function(grunt){
	// Project configuration. 
	grunt.initConfig({
		concat: {
			dist: {
			  src: ['js/script.js','js/script1.js'],
			  dest: 'build/script.js',
			},
		},
		jshint: {
			beforeconcat: ['js/script.js','js/script1.js'],
			afterconcat: ['build/script.js']
		},
		uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        'build/js/output.min.js': ['build/script.js']
		      }
		    }
		},
		watch: {
		  js: {
		    files: 'js/*.js',
		    tasks: ['jshint',"concat",'uglify']
		  },
		},
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

}