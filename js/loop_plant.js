$(document).ready(function() {
	console.log("let's party.");

	$("#wateringCan").click(function() {
		var count = 0;
		
		if (count == 3) {
		$('#flower').hide();
		};

		var plantHeight = $('#plant').height();
		var newHeight = plantHeight + 20;
		$('#plant').css('min-height',newHeight+'px');

		var animationName = 'animated fadeOutDown';
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		$('#droplet').show(1000).addClass(animationName).one(animationEnd, function() {
				$(this).removeClass(animationName);
		});

	

	// end of function
	}); 




});