$(document).ready(function() {
	console.log("let's party.");
	
	$('#flower').hide();
	// $('#leaf_01').hide();
	var counter = 0;

	$("#wateringCan").click(function() {


		console.log(counter++);
		if (counter == 10) {
			$('#plant').css('max-height','150px');
			// $('#flower').show();
			$('#leaf_01').show();
		}

		var plantHeight = $('#plant').height();
		var newHeight = plantHeight + 10;
		$('#plant').css('min-height',newHeight+'px');

		TweenMax.fromTo('#droplet',1.5, {opacity: 1, y: 0, scale: 0.5}, {opacity: 0, y: 250, scale: 1.5});

		// *****ANOTHER WAY TO ANIMATE DROPLET*****
		// var animationName = 'animated fadeOutDown';
		// var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		// $('#droplet').show(1000).addClass(animationName).one(animationEnd, function() {
		// 		$(this).removeClass(animationName);
		// });

	// end of function
	}); 




});