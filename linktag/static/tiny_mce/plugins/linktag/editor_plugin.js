/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.LinkTagPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceLinkTag', function() {
				// Internal image object like a flash placeholder
				if (ed.dom.getAttrib(ed.selection.getNode(), 'class', '').indexOf('mceItem') != -1)
					return;

				ed.windowManager.open({
					file : url + '/linktag.htm',
					width : 480 + parseInt(ed.getLang('linktag.delta_width', 0)),
					height : 385 + parseInt(ed.getLang('linktag.delta_height', 0)),
					inline : 1,
					
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('linktag', {
				title : 'linktag.desc',
				cmd : 'mceLinkTag',
				image: url + '/img/quotes.png'
			});
		},

		getInfo : function() {
			return {
				longname : 'Link Tags',
				author : 'Rick Taylor',
				authorurl : 'http://ricktaylordesign.co.uk',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('linktag', tinymce.plugins.LinkTagPlugin);
})();