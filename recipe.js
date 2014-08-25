function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = jq(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
   group.height(tallest);

$(document).ready(function() {
	$("h6:contains('USA')").addClass('usa countryOrigin');		


	$("h3:contains('Ingredients')").addClass('ingredients');
	$("h3:contains('Equipment')").addClass('equipment');
	$(".ingredients").next().andSelf().wrapAll('<div class="co2" />');
	$(".equipment").next().andSelf().wrapAll('<div class="co2" />');
	equalHeight(".co2");
});