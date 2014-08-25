$(document).ready(function() {
	$("h3:contains('Ingredients')").addClass('ingredients');
	$(".ingredients").next().andSelf().wrapAll('<div id="newDiv" />');
});