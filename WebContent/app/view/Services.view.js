sap.ui.jsview("app.view.Services", {

	getControllerName: function() {
		return "app.controller.Services";
	},
	
	createContent: function(oController) {
		
		  var oDateRangeSlider = new sap.suite.ui.commons.DateRangeSlider("rangeSlider", {
			   stepLabels: true
		  });

          var dEndOfYear = new Date(2013, 08, 31);
               oDateRangeSlider.setMax(dEndOfYear);
               oDateRangeSlider.setMin(new Date(2013, 0, 1));
               oDateRangeSlider.setValue2(dEndOfYear);
               oDateRangeSlider.setLabels([ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]);
               
          var summaryRangeSlider = new sap.m.HBox({
              items: [ oDateRangeSlider ]
          }).addStyleClass("rangeSliderHbox");
                    
          var serviceHeaderInfo = new sap.m.VBox({
			  items: [
				  new sap.m.HBox({
					  items: [
					      new sap.m.Label({
						      text: "Service Header Info"
			              }).addStyleClass("shinfoHeader") ]
					  }),
				  new sap.m.HBox({
					  items: [ 
					      new sap.m.Label({
							  text: "Order Type -"
						  }).addStyleClass("leftTextView"),
						  new sap.m.Label({
							  text: "Service Workshop"
						  }).addStyleClass("rightTextView"), 
						  new sap.m.Label({
							  text: "Order Reason -"
						  }).addStyleClass("leftTextView"), 
						  new sap.m.Label({
							  text: "Regular Planned Service"
						  }).addStyleClass("rightTextView"),
						  new sap.m.Label({
							  text: "Planned Completion Date -"
						  }).addStyleClass("leftTextView"),
						  new sap.m.Label({
							text: "21.08.2013 At 5.00 PM"
						  }).addStyleClass("rightTextViewDate")
					   ]
					}).addStyleClass("shfAlign"),
					new sap.m.HBox({
						items: [
						    new sap.m.Label({
							    text: "Odo Reading -"
						    }).addStyleClass("leftTextView"),
						    new sap.m.Label({
							    text: " 21,567 KMS"
						    }).addStyleClass("rightTextView"),
							new sap.m.Label("jobDoneBy", {
								text: "Job Done By -"
							}).addStyleClass("leftTextView"),
							new sap.m.Label({
								text: "Adam Jones"
							}).addStyleClass("rightTextView"),
							new sap.m.Label("acdate", {
								text: "Actual Completion Date -"
							}).addStyleClass("leftTextView"),
							new sap.m.Label({
								text: "21.08.2013 At 4.00 PM"
							}).addStyleClass("rightTextViewDate")
						]
					 }).addStyleClass("shfAlign"),
					 new sap.m.HBox({
						 items: [
						     new sap.m.Label({
							     text : "Contact No -"
						     }).addStyleClass("leftTextView"),
						     new sap.m.Label({
							     text : "+123-456-789"
						     }).addStyleClass("rightTextView")
						 ]
					 }).addStyleClass("shfAlign")
				  ]
		       }).addStyleClass("serviceHeaderInfo");
		
			   var serviceSummary = new sap.m.VBox("serviceSummary", {
			       items: [ 
			           new sap.m.HBox({
				           items: [ 
				               new sap.m.Label({
					               text: "Service Details"
				               }).addStyleClass("tileHeaderlabel"), 
				               new sap.m.Image({
					               src: "images/crossImage.png",
					               alt: "test image",
					               decorative: false,
					               densityAware: false,
					               press: oController.gotoHome
					            }).addStyleClass("backButton"),
                           ]
			           }).addStyleClass("backPageView"), 
				       summaryRangeSlider,
					   serviceHeaderInfo 
					 ]
			   }).addStyleClass("insideDetailsTile");
    return serviceSummary;
  }
});