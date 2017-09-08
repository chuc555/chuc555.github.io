$(document).ready(function() {
	console.log("let's party.");

$("p").hover(function(){
    $("#luck").css("background-color", "yellow");
    }, function(){
    $("#happiness").css("background-color", "pink");
});


});