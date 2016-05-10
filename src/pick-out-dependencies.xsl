<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="text"/>
	<xsl:template match="/">
		"use strict";
		window.links = [
			{source: "X", target: "B"},
			{source: "X", target: "Z"},
			{source: "Z", target: "B"}
		]
	</xsl:template>
</xsl:stylesheet>