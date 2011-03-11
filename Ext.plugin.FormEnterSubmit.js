Ext.define("Ext.plugin.FormEnterSubmit", {
	extend   : "Ext.AbstractPlugin",
	alias    : "plugin.formentersubmit",

	submitFn : Ext.emptyFn,

	init : function(form) {
		var me = this,
			items = form.items;

		items.each(function(item) {
			if (item.noSpecialKey !== true) {
				item.on("specialkey", me.handleSubmitFunc, me);
			}
		}, me);
	},

	handleSubmitFunc : function(field, e) {
		var me = this;
		if (e.getKey() == e.ENTER) {
			Ext.bind(me.submitFn, me.cmp)();
		}
	}
});