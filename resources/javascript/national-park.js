$( "i" ).click(function() {
	$("i").removeClass("yellow");
    var id = parseInt($(this).attr('id'));
    for (i = id; i > 0; i--) {
   $("#"+i+"").toggleClass("yellow");
}
   
});