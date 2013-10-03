sap.ui.jsview("app.view.Home", {

      getControllerName : function() {
         return "app.controller.Home";
      },

      createContent : function(oController) {
    	  
       /*Strat of Helath Predictions Content Tile*/
    	
      var healthPrictionContent = new sap.m.VBox({
		  items: [
		      new sap.m.Label({
				  text: "Health Predictions"
			  }).addStyleClass("deviceLabel"), 
			  new sap.m.Label({
				  text: "UP & RUNNING"
			  }).addStyleClass("upAndRunning"), 
			  new sap.m.Label({
				  text: "90%"
			  }).addStyleClass("persentage"), 
			  new sap.m.Label({
				  text: "PROBABILITY"
			  }).addStyleClass("probability"),
			  new sap.m.Label({
				  text: "In the next 72 hours"
			  }).addStyleClass("hourDetails"),
          ]
		});
			    
        var healthPrictionTile = new sap.m.CustomTile("htile", {
			content: healthPrictionContent,
			press: oController.gotoDummy
		});
			     
	/* End of Health Predictions Content Tile */       
    	
			     
	/*Start of Product Structure Content Tile*/ 
		var productStructureContent = new sap.m.VBox({
			items: [
			    new sap.m.Label({
				    text: "Product Structure"
			    }).addStyleClass("deviceLabel"), 
			    new sap.m.Image({
		            src: "images/equip1.png",
		            alt: "test image",
		            decorative: false,
		            densityAware: false,
	            }).addStyleClass("gearLogo") 
			 ]
		});
	  
        var productStructureTile = new sap.m.CustomTile("ptile", {
			content: productStructureContent,
			press: oController.gotoDummy
		});
	             
	    /*End of Product Structure Content Tile*/
	             
	         
	    /*Start of Service Summary Content Tile*/     
	
        var serviceInfoContent = new sap.m.VBox({
			items: [
				new sap.m.Label({
					text: "Service Summary"
				}).addStyleClass("deviceLabel"),
                new sap.m.Label({
					text: "Last Serviced By"
				}).addStyleClass("servicedBy"), 
				new sap.m.Label({
					text: "Adam Jones"
				}).addStyleClass("personName"),
				new sap.m.Label({
					text: "Serviced Item"
				}).addStyleClass("servicedItem"), 
				new sap.m.Label({
					text: "Engine"
				}).addStyleClass("itemName")
             ]
		});
	    var serviceInfoTile = new sap.m.CustomTile("stile", {
			content: serviceInfoContent,
			press: oController.gotoServices
		});
				 	 
		/* End of Service Summary Content Tile */
				 	 
			
		/*Start of Diagnostic History Content Tile*/	 	 

	    var digonisticHistoryContent = new sap.m.VBox({
			items: [ 
				new sap.m.Label({
					text: "Diagnostic History"
				}).addStyleClass("deviceLabel"),
                new sap.m.Image({
		            src: "images/document.png",
		            alt: "test image",
		            decorative: false,
		            densityAware: false,
	            }).addStyleClass("historyIcon") 
	        ]
		});
		 
		var digonisticHistoryTile = new sap.m.CustomTile("dtile", {
			content: digonisticHistoryContent,
			press: oController.gotoDummy
		}).addStyleClass("customTileArea").addStyleClass("hideTile");
				       
	    /*End of Diagnostic History Content Tile*/     
				       
		/*Start of Performance History Content Tile*/
		var performanceHistoryContent = new sap.m.VBox({
		    items: [ 
				new sap.m.Label({
					text: "Performance History"
				}).addStyleClass("deviceLabel"),
                new sap.m.Image({
		            src: "images/document.png",
		            alt: "test image",
		            decorative: false,
		            densityAware: false,
	            }).addStyleClass("historyIcon")
            ]
		});
		
	    var performanceHistoryTile = new sap.m.CustomTile("pertile", {
			content: performanceHistoryContent,
			press: oController.gotoDummy
		}).addStyleClass("customTileArea");
					       
		/*End of Performance History Content Tile*/
					       
			
		/*Start of Usage History Content Tile*/			       

		var usageHistoryContent = new sap.m.VBox({
			items: [
				new sap.m.Label({
					text: "Usage History"
				}).addStyleClass("deviceLabel"),
                new sap.m.Image({
			        src: "images/document.png",
			        alt: "test image",
			        decorative: false,
			        densityAware: false,
		            }).addStyleClass("historyIcon")
             ]
		 });
		
		 var usageHistoryTile = new sap.m.CustomTile("usageTile", {
			 content: usageHistoryContent,
			 press: oController.gotoDummy
		 }).addStyleClass("customTileArea");  
		 
		/* End of Usage History Content Tile */	
					       
		/*Start of Warranty Content Tile*/					       

        var warrantyContent = new sap.m.VBox({
			items: [
				new sap.m.Label({
					text: "Warranty"
				}).addStyleClass("deviceLabel"),
				new sap.m.Label("pWarranty", {
					text: "Period Of Warranty"
				}).addStyleClass("pWarranty"),
				new sap.m.HBox({
					items: [
						new sap.m.Label({
							text: "FROM"
						}).addStyleClass("warrntyInText"),
						new sap.m.Label({
							text: "TO"
						}).addStyleClass("warrntyInText").addStyleClass("toLeft") 
					]
				}).addStyleClass("boxAlign").addStyleClass("topAlign"),
				new sap.m.HBox({
					items: [
						new sap.m.Label({
							text: "22.10.12"
						}).addStyleClass("warrntyDate"),
						new sap.m.Label({
							text: "22.10.13"
						}).addStyleClass("warrntyDate").addStyleClass("dateLeft") 
					]
				}).addStyleClass("boxAlign").addStyleClass("dateAlign"),
				new sap.m.Label({
					text: "Issued On"
			    }).addStyleClass("issuedOn"),
                new sap.m.Label({
					text: "02.07.13"
				}).addStyleClass("issuereview").addStyleClass("issueLeft")
            ]
		});
	    var warrantyTile = new sap.m.CustomTile("wtile",{
	    	content: warrantyContent,
  	    	press: oController.gotoWarranty
  		}).addStyleClass("customTileArea");
	    
	    /* End of Warranty Content Tile */	
	    	    
	    /* Start of Documentation & Help Guides Content Tile */	
       var documentationContent = new sap.m.VBox({
			items: [
			    new sap.m.Label({
				    text: "Documentation & Help Guides"
			    }).addStyleClass("deviceLabel"),
			    new sap.m.HBox({
				    items: [ new sap.m.Label({
					    text: "47"
				}).addStyleClass("persentage"),
                new sap.m.Image({
	                src: "images/document.png",
	                alt: "test image",
	                decorative: false,
	                densityAware: false,
                }).addStyleClass("docImage") 
                   ]
		        }).addStyleClass("numberDocBox"),
			    new sap.m.Label({
				    text: "Documents Available"
			    }).addStyleClass("documentsDetails") 
			]
		  });
       
	     var documentationTile = new sap.m.CustomTile("documentationTile", {  
		     content:documentationContent,
		     press: oController.gotoDummy
		 }).addStyleClass("customTileArea");
	    	    
	     /* End of Documentation & Help Guides Content Tile */
	    	  
	     /* Start of Geospatial History Content Tile */
	     
	     var geospatialContent = new sap.m.VBox({
			 items: [
				 new sap.m.Label({
					 text: "Geospatial History"
				 }).addStyleClass("deviceLabel"),
				 new sap.m.Image({
					 src: "images/document.png",
					 alt: "test image",
					 decorative: false,
					 densityAware: false,
				 }).addStyleClass("historyIcon") 
			  ]
		 });
	     
	    var geospatialTile = new sap.m.CustomTile("newAddTile",{  
	    	content:geospatialContent,
	    	press: oController.gotoDummy
	    }).addStyleClass("customTileArea").addStyleClass("hideTile");
	    	    
	    /*End of Geospatial History Content Tile*/
	    	    
	    /*Start of Add Content Tile*/
	    
		var addContent = new sap.m.VBox({
			items: [
				new sap.m.Label({
					text: "Add Card"
			    }).addStyleClass("deviceLabel"), 
				new sap.m.Image({
			        src: "images/iconmonstr-plus.png",
			        alt: "test image",
			        decorative: false,
			        densityAware: false,
		            }).addStyleClass("addLogo")
            ]
		 });
		
	     var addNewTile = new sap.m.CustomTile("addTile",{  
	       	 content:addContent,
	    	 press: function() {    		        		   
   		     oController.dialogBox.open();
   		        	   }
	     }).addStyleClass("customTileArea");
	       	      
	     /*End of Add Content Tile*/
	     
	     var panel =  new sap.ui.commons.Panel("panel",{
			 applyContentPadding: false,
			 borderDesign:sap.ui.commons.enums.BorderDesign.None,
			 showCollapseIcon :false,
			 content:[
                       healthPrictionTile,
                       productStructureTile,
                       serviceInfoTile,
                       warrantyTile,
                       documentationTile,
                       performanceHistoryTile,
                       usageHistoryTile,
                       digonisticHistoryTile,
                       geospatialTile,
                       addNewTile
			  ]
		 }).addStyleClass("panelContent");
     return panel;
  }
});