sap.ui.jsview("app.view.Header", {
	
	getControllerName: function() {
		return "app.controller.Header";
	},
	
	createContent : function(oController) {
		
	  var headerText = new sap.m.HBox({
		  items: [
			  new sap.m.Label({
			      text: "Machine Health Fact Sheet"
			  }).addStyleClass("text")
		  ]
       }).addStyleClass("headerText");
		
	  var serachBox = new sap.m.HBox({
		  items: [
			  new sap.m.SearchField({
				  placeholder: "Search",
				  search: oController.onSearch
		      }).addStyleClass("Search")
		   ]
	   }).addStyleClass("serachBox");
		
	   var welcomeText = new sap.m.HBox({
		   items: [
			   new sap.m.Label({
			       text: "Welcome"
			   }).addStyleClass("welcome")
		   ]
	   }).addStyleClass("welcomeText");
		
	   var userName = new sap.m.HBox("fivBox", {
		   items: [
			   new sap.m.Label({
			       text: "Adam Jones"
			   }).addStyleClass("name")
		   ]
	    }).addStyleClass("userName");
		
		var profileHbox = new sap.m.HBox({
			items: [
			    new sap.m.HBox({
			    	items: [
			    	    new sap.m.Image({
			    	    	src: "images/Person_icon123.png",
							alt: "test image",
							decorative: false,
							densityAware: false,
						}).addStyleClass("personIcon")
					]
				}).addStyleClass("personAlign"),
				new sap.m.VBox({
					items: [
					    new sap.m.Label({
					    	text: "Adam Jones"
					    }).addStyleClass("accountProfile"),
					    new sap.m.Label({
					    	text: "adamJones@sap.com"
					    }).addStyleClass("accountProfile"),
					    new sap.ui.commons.Button("viewProfile", {
					    	text: "View Profile",
						})
					]
				}).addStyleClass("detailsAlign")
			]
		}).addStyleClass("headerBox");
		
		var logoutIconHbox = new sap.m.HBox({
			items: [
			    new sap.m.HBox({
			    	items: [
			    	    new sap.ui.commons.Button("addAccount", {
			    	    	text: "Add Account"
			    	    })
			    	]
				}).addStyleClass("logoutIconBox"),
				new sap.m.HBox({
					items: [
					    new sap.ui.commons.Button("signOut", {
					    	text: "Sign Out"
					    })
					]
				}).addStyleClass("logoutIconBox")
			]
		}).addStyleClass("footerLogout");
		
		var logOutContent = new sap.m.VBox({
			items: [profileHbox,logoutIconHbox
			]
		});
		
		var logoutDetails = new sap.m.Popover("logoutDetails", {
			placement: sap.m.PlacementType.Bottom,
			showHeader: false,
			content: [logOutContent
			]
		});
		
		var logOutIcon = new sap.m.HBox({
			items: [
			    new sap.m.Image({
			    	src: "images/ArrowDown.png",
					alt: "test image",
					decorative: false,
					densityAware: false,
					tap: function() {
						logoutDetails.setPlacement(sap.m.PlacementType.Bottom);
						logoutDetails.openBy(this);
					}
				}).addStyleClass("logOut")
			]
		});
		
		var header = new sap.m.HBox({
			items: [
			    headerText,
			    serachBox,
			    welcomeText,
			    userName,
			    logOutIcon
			]
		}).addStyleClass("topHeader");
		
		return header;
		
      }

});