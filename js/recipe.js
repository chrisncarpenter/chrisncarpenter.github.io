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
		var textArray = text.split('|');
		console.log(textArray[0]);
    	$(this).html(textArray[0]+ " <strong>"+textArray[1]+"</strong>");
	});

	$("h3:contains('Equipment')").addClass('equipment');
	$(".equipment").next().andSelf().wrapAll('<div class="co2" />');
	
	$( ".co2" ).wrapAll( "<div class='new' />");
	
	equalHeight($(".co2"));
});