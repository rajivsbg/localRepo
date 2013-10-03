sap.ui.jsview("app.view.Dummy", {
	
	getControllerName: function() {
		return "app.controller.Dummy";
	},
	
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.VerticalLayout();
		oLayout.addStyleClass("dummy");
		
		var text = new sap.ui.commons.TextView({
			text: "This is a dummy page"
		});
		
		oLayout.addContent(text);
		
		var button = new sap.ui.commons.Button({
			text: "Go Back to Home",
			press: oController.gotoHome
		});
		oLayout.addContent(button);
		
		return oLayout;
	}
	
});