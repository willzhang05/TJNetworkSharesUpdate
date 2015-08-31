var w = $(window).width();	
var dynWidth = 1366;
if(w > dynWidth){
	$("#sidebar-wrapper").css("left", "0");
	$("#wrapper").css("left", "200px");
	$("#wrapper").css("width", "calc(100% - 200px)");
	$(".toggle-background").hide();
	$("#name").css("width", "calc(100% - 200px)");
}
$(window).resize(function() {
	w = $(window).width();
	if(w > dynWidth){
		$("#sidebar-wrapper").css("left", "0");
		$("#wrapper").css("left", "200px");
		$("#wrapper").css("width", "calc(100% - 200px)");
		$(".toggle-background").hide();
		$("#name").css("width", "calc(100% - 200px)");
	} else if(w <= dynWidth){
		$("#sidebar-wrapper").css("left", "-=200");
		$("#wrapper").css("left", "0");
		$("#wrapper").css("width", "100%");
		$("#name").css("width", "calc(100% - 68px)");
		$(".toggle-background").show();
	}
});
$(function() {
    $("#menu-toggle-button").click(function() {
        $("#sidebar-wrapper").animate({
            left: '0'
        }, 'fast');
    });
    $("#menu-toggle-button").focusout(function() {
        $("#sidebar-wrapper").animate({
            left: '-=200'
        }, 'fast');
    });
});