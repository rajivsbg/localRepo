sap.ui.jsview("app.view.Warranty", {

	getControllerName: function() {
		return "app.controller.Warranty";
	},
	
	createContent: function(oController) {

		//Define some sample data 
		var aData = [
		    {
		    	fgroup: "Engine",
				code: "E-024",
				des: "Engine Oil Leaking",
				amount: "Rs 1200",
				cost: "Rs 800",
				spareCost: "Rs 1800"
			},
			{
				fgroup: "Tractor",
				code: "S-045",
				des: "Fuel Pump Blocked",
				amount: "Rs 1000",
				cost: "Rs 600",
				spareCost: "Rs 3400"
			}, {
				fgroup: "Pump",
				code: "R-871",
				des: "Pipe Blocked",
				amount: "Rs 1100",
				cost: "Rs 300",
				spareCost: "Rs 2300"
			}
		];

		//Create an instance of the table control
		var oTable = new sap.ui.table.Table("warrantyTable", {
			visibleRowCount: 12,
			selectionMode: sap.ui.table.SelectionMode.Single
		});
			
		//Define the columns and the control templates to be used
		var oColumn = new sap.ui.table.Column("colOne", {
			label: new sap.ui.commons.Label({
				text: "Functional Group"
	        }),
			template: new sap.ui.commons.TextView().bindProperty("text", "fgroup"),
		    sortProperty: "fgroup",
		    filterProperty: "fgroup",
		    width: "150px"
		});			

		oTable.addColumn(oColumn);
		oTable.addColumn(new sap.ui.table.Column("colTwo", {
			label: new sap.ui.commons.Label({
				text: "Symptom Code"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text", "code"),
		    sortProperty: "code",
		    filterProperty: "code",
		    width: "150px"
		}));
			   

		oTable.addColumn(new sap.ui.table.Column("colThree", {
			label: new sap.ui.commons.Label({
				text: "Descripton"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "des"),
			sortProperty: "des",
			filterProperty: "des",
			width: "150px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column("colFour", {
			label: new sap.ui.commons.Label({
				text: "Claim Amount"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "amount"),
		    sortProperty: "amount",
		    filterProperty: "amount",
		    width: "150px"
		}));
			

		oTable.addColumn(new sap.ui.table.Column("colFive", {
			label: new sap.ui.commons.Label({
				text: "Labor Cost"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "cost"),
	        sortProperty: "cost",
	        filterProperty: "cost",
	        width: "150px"
	    }));
		
		oTable.addColumn(new sap.ui.table.Column("colSix", {
			label: new sap.ui.commons.Label({
				text: "Spare Cost"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "spareCost"),
			sortProperty: "spareCost",
			filterProperty: "spareCost",
			width: "150px"
		}));
			
		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		    oModel.setData({modelData: aData});
		    oTable.setModel(oModel);
		    oTable.bindRows("/modelData");
			
		//Initially sort the table
		oTable.sort(oTable.getColumns()[0]);
		
		//Warranty Details
		var warranty = new sap.m.VBox("warrantyTileDetails", {
			items: [
			    new sap.m.HBox({
			    	items: [
			    	    new sap.m.Label({
			    	    	text: "Warranty Claims"
			    	    }).addStyleClass("tileHeaderlabel"),
			    	    new sap.m.Image({
			    	    	src: "images/mapIcon.png",
							alt: "test image",
							decorative : false,
							densityAware : false
						}).addStyleClass("headerpImage"),
						new sap.m.Image({
							src: "images/modal analytics.png",
							alt: "test image",
							decorative : false,
							densityAware : false
						}).addStyleClass("headerpImage"),
						new sap.m.Image("pdfLogo", {
							src: "images/pdf.png",
							alt: "test image",
							decorative: false,
							densityAware: false
						}).addStyleClass("headerpImage"),
						new sap.m.Image("printLogo", {
							src: "images/print.png",
							alt: "test image",
							decorative: false,
							densityAware: false,
						}).addStyleClass("headerpImage"),
						new sap.m.Image("warrantClose", {
							src: "images/crossImage.png",
							alt: "test image",
							decorative: false,
							densityAware: false,
							press: oController.gotoHome
						}).addStyleClass("backButton")
					]
			 }).addStyleClass("backPageView"),
			    new sap.m.VBox({
			    	items: [
			    	    new sap.m.HBox({
						     items: [
						         new sap.m.Label({
						        	 text: "Cost Info"
						         }).addStyleClass("shinfoHeader")
						      ]
			    	    }),
						new sap.m.HBox({
							items: [
								new sap.m.Label({
									text: "Total Spare Cost -"
								}).addStyleClass("leftTextView"),
								new sap.m.Label({
									text: "Rs 7500"
								}).addStyleClass("rightTextView"),
								new sap.m.Label("lcost",{
									text: "Total Labor Cost -"
								}).addStyleClass("leftTextView"),
								new sap.m.Label({
									text: "Rs 1200"
								}).addStyleClass("rightTextView"),
								new sap.m.Label("wcost",{
									text: "Total Warranty Cost -"
								}).addStyleClass("leftTextView"),
								new sap.m.Label({
									text: "Rs 8700"
								}).addStyleClass("rightTextViewDate")
								]
						}).addStyleClass("costInfoAlign"), 
						]
				}).addStyleClass("totalCostDetails"),
					  new sap.m.VBox({
						  items: [
							  new sap.m.HBox({
								  items: [ 
								      new sap.m.Label({
										  text: "Warranty Info"
									  }).addStyleClass("shinfoHeader") 
									     ]
							  }),
							  new sap.m.HBox({
								  items: [
									  new sap.m.Label({
										  text: "Warranty Category -"
									  }).addStyleClass("leftTextView"),
									  new sap.m.Label({
										  text: "Full Time"
									  }).addStyleClass("rightTextView"),
									  new sap.m.Label("issuedOn",{
										  text: "Issued On -"
									  }).addStyleClass("leftTextView"),
									  new sap.m.Label({
										  text: "21.10.2012"
									  }).addStyleClass("rightTextView"),
									  new sap.m.Label("contactPerson",{
										  text: "Contact Person -"
									  }).addStyleClass("leftTextView"),
									  new sap.m.Label({
										  text: "Adam Jones"
									  }).addStyleClass("rightTextViewDate")
									  ]
							   }).addStyleClass("costInfoAlign"),
							   new sap.m.HBox({
								   items: [
									   new sap.m.Label({
										   text: "Warranty Basis-"
									   }).addStyleClass("leftTextView"),
									   new sap.m.Label({
										   text: "ABC"
									   }).addStyleClass("rightTextView"),
									   new sap.m.Label("startDate",{
										   text: "Start Date -"
									   }).addStyleClass("leftTextView"),
									   new sap.m.Label({
										   text: "22.10.12"
									   }).addStyleClass("rightTextView"),
									   new sap.m.Label("contactNumber",{
										   text: "Contact Number -"
									   }).addStyleClass("leftTextView"),
									   new sap.m.Label({
										   text: "9045671234"
									   }).addStyleClass("rightTextViewDate")
									   ]
							   }).addStyleClass("costInfoAlign"),
							   new sap.m.HBox({
								   items: [
									   new sap.m.Label({
										   text: "Warranty Type-"
									   }).addStyleClass("leftTextView"),
									   new sap.m.Label({
										   text: "EFG"
									   }).addStyleClass("rightTextView"),
									   new sap.m.Label("endDate",{
										   text: "End Date -"
									   }).addStyleClass("leftTextView"),
									   new sap.m.Label({
										   text: "22.10.13"
									   }).addStyleClass("rightTextView")
									   ]
							   }).addStyleClass("costInfoAlign")
							   ]
					}).addStyleClass("warrantyInformation"),
					new sap.m.VBox({
						items: [oTable]
					}).addStyleClass("warrantyTable"),
                   ]
		   }).addStyleClass("insideDetailsTile");
	return warranty;
	}
});