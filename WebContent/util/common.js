// Navigate to view
mhfs.common.navigateToView = function(view) {
	var oControl = sap.ui.getCore().byId("contentPanel");
	oControl.removeAllContent();
	oControl.addContent(view);
};