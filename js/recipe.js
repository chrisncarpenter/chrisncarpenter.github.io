function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
   group.height(tallest);
}
$(document).ready(function() {
	$("h6:contains('USA')").addClass('usa countryOrigin');		
	
	
	$('.ingredients li').each(function() {
		var text= $(this).text();
		var textAfterPipe = text.substring(text.indexOf('|') + 1);
		console.log(textAfterPipe);
    	$(this).wrap(" <strong /> ");
	});

	$("h3:contains('Equipment')").addClass('equipment');
	$(".equipment").next().andSelf().wrapAll('<div class="co2" />');
	
	$( ".co2" ).wrapAll( "<div class='new' />");
	
	equalHeight($(".co2"));
});