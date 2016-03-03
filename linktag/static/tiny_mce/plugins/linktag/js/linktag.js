var LinkTagDialog = {
	preInit : function() {
		var url;

		tinyMCEPopup.requireLangPack();

	},

	init : function(ed) {
		var f = document.forms[0], nl = f.elements, ed = tinyMCEPopup.editor, dom = ed.dom, n = ed.selection.getNode();

		tinyMCEPopup.resizeToInnerSize();
		//this.fillClassList('class_list');
		//this.fillFileList('src_list', fl);
		//this.fillFileList('over_list', fl);
		//this.fillFileList('out_list', fl);
		TinyMCE_EditableSelects.init();

	},

	insert : function(file, title) {
		var ed = tinyMCEPopup.editor, t = this, f = document.forms[0];

		if (f.ref.value == '') {
			tinyMCEPopup.close();
			return;
		}
		alert("HI");
		t.insertAndClose();
	},

	insertAndClose : function() {
		alert("BOO");
		var ed = tinyMCEPopup.editor, f = document.forms[0], nl = f.elements, v, args = {}, el, tagname;
		tinyMCEPopup.restoreSelection();
		// Fixes crash in Safari
		if (tinymce.isWebKit)
			ed.getWin().focus();
		var c = ed.selection.getContent();
		var linkref = f.ref.value;

		if (c) {
			ins = "[inlink:"+linkref+"]"+c+"[/inlink]";
			ed.selection.setContent(ins);
			ed.undoManager.add();
		} else {
			ins = "[cta:"+linkref+"]";
			ed.execCommand('mceInsertContent', false, ins, {skip_undo : 1});
			ed.undoManager.add();
		}
		tinyMCEPopup.editor.execCommand('mceRepaint');
		tinyMCEPopup.editor.focus();
		tinyMCEPopup.close();
	},
};

LinkTagDialog.preInit();
tinyMCEPopup.onInit.add(LinkTagDialog.init, LinkTagDialog);