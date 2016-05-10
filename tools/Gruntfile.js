module.exports = function (grunt) {

	// load nodejs modules from package.json
	require("load-grunt-tasks")(grunt);

	var options = {
		srcDir: "../src",
		outputDir: "../output"
	};

	// base configuration
	grunt.initConfig({
		dirs : options,
		 exec : {
            'http-server' : {
                cmd : "cmd /c start \"http-server\" /min http-server <%= dirs.outputDir %> -c-1",
                stdout : true,
                stderr : true
            }
        }
	});

	//<editor-fold desc="Tasks loader">
	var path = require("path");

	function loadGruntConfigPart(gruntConfigPath) {
		var absolutePath = path.resolve(gruntConfigPath);
		require(absolutePath)(grunt, options);
	}
	//</editor-fold>

	grunt.loadNpmTasks('grunt-exec');

	// load tasks
	grunt.file.expand("grunt-tasks/*.js").forEach(loadGruntConfigPart);

	grunt.registerTask("rebuild", ["clean:output", "build"]);

	grunt.registerTask('http-server', ['exec:http-server','watch-source']);

	grunt.registerTask('default', ["rebuild","http-server"]);
	
};