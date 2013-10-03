sap.ui.controller("app.controller.Header", {
	
	onInit: function() {
		
	},

	onSearch: function(oEvent) {
		jQuery.sap.log.debug("searchField: search for: " + event.getParameter("query"));
	}

});