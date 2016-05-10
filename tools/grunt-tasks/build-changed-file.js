module.exports = function (grunt, options) {

	grunt.config.merge({
		watch: {
			src: {
				files: options.srcDir + "/**/*.*",
				tasks: ["build"]
			},
			options: {
				livereload: true,
				spawn: false
			}
		}
	});
	grunt.registerTask("watch-source", ["watch:src"]);
};