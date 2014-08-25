$(document).ready(function() {
	$("h3:contains('Ingredients')").addClass('ingredients');
	$('.ingredients, ul').wrapAll.( "<div></div>" );
});