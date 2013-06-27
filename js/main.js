'use strict';

$(document).ready(function() {

	if (isTodayTuesday()) {
		$('body').attr('data-isTuesday','true');
		$('.answer-text').text('Yep.');
		changeFavicon('favicon_yes.ico');

	} else {

		$('body').attr('data-isTuesday','false');
		$('.answer-text').text('Nope.');
		changeFavicon('favicon_no.ico');

	}
});

function isTodayTuesday() {

	var date = new Date(),
		day  = date.getDay();

	return (day === 2);
}

function changeFavicon(src) {
	// emulate html5 head selector, even in older browsers
	// http://mathiasbynens.be/notes/document-head
	document.head || (document.head = document.getElementsByTagName('head')[0]);

	// if we already have a favicon attached to the DOM, remove it
	var favicon = $("link[rel='shortcut icon']");
	if(favicon.length >= 1) favicon.remove();

	// plop in our new favicon
	var link = document.createElement('link');
	link.rel = 'shortcut icon';
	link.href = src;
	document.head.appendChild(link);
}

