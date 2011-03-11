{
	xtype       : "form",
	defaultType : "textfield",
	//...
	plugins     : [
		{
			ptype    : "formentersubmit",
			submitFn : doSubmit
		}
	],
	items       : [
		{ fieldLabel : "Username" },
		{ fieldLabel : "Password" },
		{ fieldLabel : "CAPTCHA", noSpecialListener : true }
	]
}

doSubmit = function() {
	form.getForm().submit();
}