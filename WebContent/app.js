sap.ui.localResources("app");


// Home view
mhfs.view.home = sap.ui.view({
	viewName: "app.view.Home",
	type: sap.ui.core.mvc.ViewType.JS
});

// Warranty view
mhfs.view.warranty = sap.ui.view({
	viewName: "app.view.Warranty",
	type: sap.ui.core.mvc.ViewType.JS
});

// Services view
mhfs.view.services = sap.ui.view({
	viewName: "app.view.Services",
	type: sap.ui.core.mvc.ViewType.JS
});

//Dummy view
mhfs.view.dummy = sap.ui.view({
	viewName: "app.view.Dummy",
	type: sap.ui.core.mvc.ViewType.JS
});

// Initial view to launch
mhfs.app = sap.ui.view({
	viewName: "app.view.Layout",
	type: sap.ui.core.mvc.ViewType.JS
});

mhfs.app.placeAt("content");