module.exports = function (grunt, options) {
	grunt.config.merge({
		clean: {
			output: {
				src: [options.outputDir]
			},
			options: {
				force: true
			}
		}
	});
};