sap.ui.jsview("app.view.SideBar", {

      getControllerName : function() {
         return "app.controller.SideBar";
      },

      createContent : function(oController) {
    	  
       /*Start of General Information Content*/
		var generalInformation = new sap.m.HBox({
			items: [ 
			    new sap.m.Label({
			    	text: "General Information"
			    }).addStyleClass("textTile")
		    ]
		});
		    	           
       var contentOfGeneralTile = new sap.m.HBox({
		   items: [ 
		       new sap.m.HBox({
				   items: [ 
				       new sap.m.Image({
					       src: "images/tractor.png",
					       alt: "test image",
					       decorative: false,
					       densityAware: false,
				       }).addStyleClass("deviceLogo")
                   ]
			  }).addStyleClass("machineArea"),
              new sap.m.VBox({
				  items: [ 
				      new sap.m.Label("drive", {
					      text: "DSFW TRACTOR"
				      }).addStyleClass("deviceType"),
				      new sap.m.HBox({
					      items: [ 
					          new sap.m.Label({
						          text: "Equipment No :"
					          }).addStyleClass("eqpNo"),
					          new sap.m.Label({
						          text: " SFGXSGT1324"
					          }).addStyleClass("eqpNo"),
					      ]
				      }).addStyleClass("textBox"), 
				  ]
			    })
               ]
		});
		    	            
        var serialNo = new sap.m.HBox({
			items: [ 
			    new sap.m.HBox({
				    items: [ 
				        new sap.m.Label({
					        text: "Serial No :"
				        }).addStyleClass("textTile")
				    ]
			    }),
			    new sap.m.HBox({
				    items: [
				        new sap.m.Label({
					        text: "42532654687"
				        }).addStyleClass("textTile") 
				    ]
			    }).addStyleClass("meterDistance")
            ]
		}).addStyleClass("eligibilityContent");
		    	             
		/* End of General Information Content */ 
		    	             
		/*Start of Customer Summary Content*/
		
	    var customerSummary = new sap.m.HBox({
			items: [ 
			    new sap.m.Label({
				    text: "Customer Summary"
			    }).addStyleClass("textTile") 
			]
		});
						    	  
        var customerSummaryTile = new sap.m.HBox({
			items: [ 
			    new sap.m.HBox({
				    items: [ 
				        new sap.m.Image({
					        src: "images/efb icon.png",
					        alt: "test image",
					        decorative: false,
					        densityAware: false,
				        }).addStyleClass("userIcon") 
				    ]
			    }),
			    new sap.m.VBox({
				    items: [ 
				         new sap.m.Label("efb", {
						     text: "EFB PVT LTD."
					     }).addStyleClass("deviceType"),
			             new sap.m.HBox({
				             items: [ 
				                 new sap.m.Label({
					                 text: "Customer ID :"
			                     }).addStyleClass("eqpNo"),
			                     new sap.m.Label({
				                     text: " 645864FDGHE"
			                     }).addStyleClass("eqpNo"),
			                 ]
			            }).addStyleClass("textBox"),
                    ]
			    })
            ]
		});
							    	 
        var eligibility = new sap.m.HBox({
			items: [
			    new sap.m.HBox({
				    items: [
				        new sap.m.Label({
					        text: "Eligibility Until :"
				        }).addStyleClass("textTile") ]
			    }),
			    new sap.m.HBox({
				    items: [ 
				        new sap.m.Label({
					        text: "20.01.16"
				        }).addStyleClass("textTile") ]
			    }).addStyleClass("meterDistance")
            ]
		}).addStyleClass("eligibilityContent");
					    	 
    	 
    	/* End of Customer Summary Content */
    	                                   
    	                                   
    	 /*Start of Location Content*/   



	  var location = new sap.m.HBox({
		  items: [
		      new sap.m.Label({
				  text: "Location"
			  }).addStyleClass("textTile") 
		  ]
	  });
	  
	  var locationTile = new sap.m.HBox({
		  items: [ 
		      new sap.m.HBox({
				  items: [
				      new sap.m.Image({
					      src: "images/maps.png",
					      alt: "test image",
					      decorative: false,
					      densityAware: false,
				      }).addStyleClass("locationIcon")
				  ]
			  }), 
			  new sap.m.VBox({
				  items: [
				      new sap.m.HBox({
					      items: [
					          new sap.m.Label({
						          text: "Domlur 2nd Stage"
					          }).addStyleClass("eqpNoAddress")
					      ]
				      }).addStyleClass("textBoxAlign"),
				      new sap.m.HBox({
					      items: [ 
					          new sap.m.Label({
						          text: "Bangalore"
					          }).addStyleClass("eqpNoAddress")
					      ]
				      }).addStyleClass("textBoxAlign")
                  ]
			  }) 
		    ]
		});
    	 
        var locationDistance = new sap.m.HBox({
			items: [ 
			    new sap.m.HBox({
				    items: [ 
				        new sap.m.Label({
					        text: "Nearest Service Station :"
				        }).addStyleClass("textTile") 
				    ]
			    }),
			    new sap.m.HBox({
				    items: [ 
				        new sap.m.Label({
					        text: "10 Km"
				        }).addStyleClass("meter")
				    ]
			    }).addStyleClass("meterDistance")
           ]
		}).addStyleClass("locationDistance");
		    	 
	 /* End of Location Content */
								    	    
								    	    
	/* Start of Health Summary Content */
								    	    

	  var healthSummary = new sap.m.HBox({
		  items: [ 
		      new sap.m.Label({
				  text: "Health Summary"
			  }).addStyleClass("textTile")
          ]
	  });
									    	 

	  var healthSummaryTile = new sap.m.HBox({
		  items: [
			  new sap.m.HBox({
				  items: [ 
				      new sap.m.Image({
						  src: "images/iconmonstr-line-chart-icon.png",
						  alt: "test image",
						  decorative: false,
						  densityAware: false,
					  }).addStyleClass("graphIcon")
				  ]
			  }),
			  new sap.m.VBox({
				  items: [
					  new sap.m.Label({
						  text: "Oil Pressure"
					  }).addStyleClass("eqpNo"),
					  new sap.ui.commons.ProgressIndicator("ProgIndicatorPressure", {
						  width: "191px",
						  percentValue: 67,
						  displayValue: "67%"
					  }),
					  new sap.m.Label("temperature", {
						  text: "Oil Temperature"
					  }).addStyleClass("eqpNo"),
					  new sap.ui.commons.ProgressIndicator("ProgIndicatorTemp", {
						  width: "191px",
						  percentValue: 87,
						  displayValue: "96%"
					   }) 
				   ]
			  }).addStyleClass("indicator")
		  ]
		});
    	 
       var age = new sap.m.HBox({
		   items: [ 
		       new sap.m.HBox({
				   items: [ 
				       new sap.m.Label({
					       text: "Age :"
				       }).addStyleClass("textTile") 
				   ]
			   }),
			   new sap.m.HBox({
				   items: [ 
				       new sap.m.Label({
					       text: "2000 + Working Hours"
				       }).addStyleClass("textTile") 
				   ]
			   }).addStyleClass("meterDistance")
           ]
	   }).addStyleClass("ageContent");
    	 
	/* End of Health Summary Content */
							                


		var fixTile = new sap.m.HBox({
			items: [ 
			    new sap.m.VBox({
				    items: [
						new sap.m.VBox({
							items: [ generalInformation, contentOfGeneralTile,serialNo ]
						}).addStyleClass("genInfoTile"),
						new sap.m.VBox({
							items: [ customerSummary, customerSummaryTile,eligibility ]
						}).addStyleClass("tileSize"),
						new sap.m.VBox({
							items: [ location, locationTile,locationDistance ]
						}).addStyleClass("tileSize"),
						new sap.m.VBox({
							items: [ healthSummary, healthSummaryTile, age ]
						}).addStyleClass("tileSize")
				    ]
			    })
			 ]
		}).addStyleClass("fixTile");
		 return fixTile;
      }
 });