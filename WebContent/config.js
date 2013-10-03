
// Configuration file for MHFC application

window["sap-ui-config"] = {
	theme: "sap_mvi",
	libs: [
	    "sap.m",
	    "sap.ui.core",
	    "sap.ui.commons",
	    "sap.suite.ui.commons",
	    "sap.ui.table"
	].join()
};

var mhfs = {};
mhfs.view = {};
mhfs.common = {};

// Set application to Production Mode [true] || Development Mode [false]
mhfs.applicationMode = false;

// Production Mode URLs
mhfs.production = {
	// base URL
	base: "http://54.228.203.76:8000/MHFS/services/",
	
	// Service end pints
	services: {
		getClaimsHistory: "claimsHistory.xsjs"
	}
};

// Development Mode URLs
mhfs.development = {
	// base URL
	base: "http://localhost:8085/mhfs/data/",
	
	// Service end pints
	services: {
		getClaimsHistory: "claimsHistory.json"
	}
};

mhfs.services = function() {
	var obj = {};
	var mode = mhfs.applicationMode ? "production" : "development";
	for(var index in mhfs[mode]["services"]) {
		obj[index] = mhfs[mode]["base"] + mhfs[mode]["services"][index];
	}
	return obj;
}();