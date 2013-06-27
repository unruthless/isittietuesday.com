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
	// if we already have a favicon attached to the DOM, remove it
	var favicons = $("link[rel='shortcut icon']");
	if(favicons.length >= 1) {
		favicons.each(function(i) {
			favicons[i].remove();
		});
	}

	// plop in our new favicon
	var link = document.createElement('link');
	link.rel = 'shortcut icon';
	link.href = src;
	document.head.appendChild(link);
}

