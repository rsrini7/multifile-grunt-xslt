module.exports = function (grunt, options) {
	grunt.config.merge({
		env : {
			"add-xsltproc-to-path" : {
				push: {
					PATH : "xsltproc"
				}
			}
		},
		xsltproc: {
			options: {
				stylesheet: options.srcDir + "/pick-out-dependencies.xsl"
			},
			compile: {
				src : options.srcDir + "/pack-js.xml",
				dest: options.outputDir + '/graph-data.js'
			}
		}
	});
	grunt.registerTask("create-graph-data", ["env:add-xsltproc-to-path", "xsltproc:compile"]);
};