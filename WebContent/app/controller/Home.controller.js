sap.ui.controller("app.controller.Home", {

	onInit: function() {
		this.dialogBox = this.createDialogBox();
	},
	
	// Create settings dialog box
	createDialogBox: function() {
		var me = this;
		var dialog = new sap.m.Dialog("tileSettings", {
			title:"Select Tiles To Enable",
			content: me.createCheckboxGroup(),
			type: sap.m.DialogType.Message
		});
		return dialog;
	},
	
	// Create check box group for dialog
	createCheckboxGroup: function() {
		var me = this;
		var oControls = [],
		oData = [
 		    {text:"Health Predictions", checked:true, name: "htile"},
 		    {text:"Product Structure", checked:true, name: "ptile"},
 		    {text:"Service Summary", checked:true, name: "stile"},
 		    {text:"Documentation & Help", checked:true, name: "documentationTile"},
 		    {text:"Performance History", checked:true, name: "pertile"},
 		    {text:"Usage History", checked:true, name: "usageTile"},
 		    {text:"Warranty", checked:true, name: "wtile"},
 		    {text:"Diagnostic History", checked:false, name: "dtile"},
 		    {text:"Geospatial History",  checked:false, name: "newAddTile"}
 		];
		$.each(oData, function(index, value) {
			oControls.push(			   
				new sap.ui.commons.CheckBox({
					text: value.text,
					checked: value.checked,
					name: value.name
				}).addStyleClass("tileCheckbox")				          
			   );
		});
		oControls.push(new sap.ui.commons.Button("saveButton",{
			text:"Save",
			press: function() {
				me.changeTileDisplay();				
			}
		}));
		return oControls;
	},
	
	// Settings dialog save button handler
	changeTileDisplay: function() {
		var oDialogContent = sap.ui.getCore().byId("tileSettings").getContent();
		$.each(oDialogContent, function(index, oControl) {
			if(oControl.hasStyleClass("tileCheckbox")) {
				var oTile = sap.ui.getCore().byId(oControl.getName());
				if(oControl.getChecked() === true) {
					oTile.removeStyleClass("hideTile");
				} else {
					oTile.addStyleClass("hideTile");
				}
			}
		});
		this.dialogBox.close();
	},
	
	
	// Navigate to warranty view
	gotoWarranty: function() {
		mhfs.common.navigateToView(mhfs.view.warranty);
	},
	
	// Navigate to services view
	gotoServices: function() {
		mhfs.common.navigateToView(mhfs.view.services);
	},
	
	// Navigate to dummy view
	gotoDummy: function() {
		mhfs.common.navigateToView(mhfs.view.dummy);
	}
});