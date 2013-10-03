sap.ui.jsview("app.view.Layout", {

	getControllerName: function() {
		return "app.controller.Layout";
	},
	
	createContent: function(oController) {
		
		var oLayout = new sap.ui.commons.layout.BorderLayout(this.createId("template"), {
			width: "100%",
			height: (jQuery(window).height() - 10) + "px"		
		});
		
		return oLayout;
	}

});