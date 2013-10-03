sap.ui.controller("app.controller.Layout", {

	onInit: function() {
		var oControl = this.getView().byId("template");		
		oControl.setTop(this.createHeader());
		oControl.setBegin(this.createSideBar());
		oControl.setCenter(this.createContent());
	},
	
	// Append header view to layout view
	createHeader: function() {
		var header = sap.ui.view({
			viewName: "app.view.Header",
			type: sap.ui.core.mvc.ViewType.JS
		});
		var oLayout = new sap.ui.commons.layout.BorderLayoutArea({
			size: "55px"
		});
		
		oLayout.addStyleClass("headerArea");
		oLayout.addContent(header);
		
		return oLayout;
	},
	
	// Append side bar view to layout view
	createSideBar: function() {
		var sideBar = sap.ui.view({
			viewName: "app.view.SideBar",
			type: sap.ui.core.mvc.ViewType.JS
		});
		var oLayout = new sap.ui.commons.layout.BorderLayoutArea({
			size: "27.15%",
			overflowX: "hidden",
			overflowY: "hidden"
		});
		
		oLayout.addContent(sideBar);
		
		return oLayout;
	},
	
	// Append home view to layout view
	createContent: function() {
		var content = mhfs.view.home;
		var oLayout = new sap.ui.commons.layout.BorderLayoutArea("contentPanel", {
			size: "72.85%",
			overflowX: "hidden",
			overflowY: "auto"
		});
		
		oLayout.addContent(content);
		
		return oLayout;		
	}

});