$(document).ready(function() {
	$("h6:contains('USA')").addClass('usa countryOrigin');		


	$("h3:contains('Ingredients')").addClass('ingredients');
	$(".ingredients").next().andSelf().wrapAll('<div id="newDiv" />');
});