'use strict';

function isTodayTuesday() {

	var date = new Date(),
		day  = date.getDay();

	return (day === 2);
}

$(document).ready(function() {

	if (isTodayTuesday()) {
		$('body').attr('data-isTuesday','true');
		$('.answer-text').text('Yep.');

	} else {

		$('body').attr('data-isTuesday','false');
		$('.answer-text').text('Nope.');

	}
});

