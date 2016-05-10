module.exports = function (grunt, options) {
	grunt.config.merge({
		"copy": {
			src: {
				files: [{
					expand: true,
					cwd: options.srcDir,
					src: ["**/*.*", "!pack-js.xml", "!pick-out-dependencies.xsl"],
					dest: options.outputDir
				}]
			}
		}
	});
	grunt.registerTask("build", ["copy:src", "create-graph-data"]);
};