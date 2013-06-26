'use strict';

var Messages = {
	yes: "Yep.",
	no: "Nope."
};

var Elements = {
	img: '#answer-image',
	txt: '#answer-text',
	container: '#answer-container'
};

var Classes = {
	yes: 'yes',
	no: 'no'
};

var Days = {
	sunday: 0,
	monday: 1,
	tuesday: 2,
	wednesday: 3,
	thursday: 4,
	friday: 5,
	saturday: 6
};

function isTodayTuesday() {
	var date = new Date();
	var day = date.getDay();
	if(day == Days.tuesday) return true;
	else return false;
}

$(document).ready(function() {
	var statusMsg;
	var statusClass;

	if(isTodayTuesday()) {
		statusMsg = Messages.yes;
		statusClass = Classes.yes;
	}

	else {
		statusMsg = Messages.no;
		statusClass = Classes.no;
	}

	console.log("Is it Tuesday? " + statusMsg);

	// make sure we're clear of other conflicting classes
	for(var key in Classes) {
		// $(Elements.txt).removeClass(key);
		$(Elements.img).removeClass(key);
	}

	// and add relevant classes
	$(Elements.img).addClass(statusClass);

	// append text
	$(Elements.txt).append('<h1>' + statusMsg + '</h1>');
});

