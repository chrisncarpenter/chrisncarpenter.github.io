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


	$(".equipment").next().andSelf().wrapAll('<div class="co2" />');
	$(".ingredients").next().andSelf().wrapAll('<div class="co2" />');
	$( ".co2" ).wrapAll( "<div class='new' />");
	
	equalHeight($(".co2"));
	
	$('p:first').html(function (i, html)
	{
		return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="big-cap">$1</span>');
	});
	
	
});