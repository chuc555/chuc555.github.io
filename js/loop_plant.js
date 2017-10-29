$(document).ready(function() {
	console.log("let's party.");
	
	$('#leaf_01').hide();
	$('#leaf_02').hide();
	$('#leaf_03').hide();
	$('#leaf_04').hide();

	var counter = 0;

	$(".plantLoopBg").click(function() {
		console.log(counter++);
		if (counter == 10) {
			$('#plant').css('max-height','150px');
			$('#leaf_01').show();
		} else if (counter == 12) {
			$('#leaf_02').show();
		} else if (counter == 14) {
			$('#leaf_03').show();
		} else if (counter == 18) {
			$('#leaf_04').show();
		};

		var plantHeight = $('#plant').height();
		var newHeight = plantHeight + 10;
		$('#plant').delay(1000).css('min-height',newHeight+'px');

		//TweenMax.fromTo('#droplet',1.5, {opacity: 1, y: 0, scale: 0.5}, {opacity: 0, y: 250, scale: 1.5});
	}); // end of function
 	

	$(document).click(function(e){ 
	 	var xValue = e.pageX
 		var yValue = e.pageY 
	console.log(xValue +', '+ yValue); 

	var windowHeight = $(window).height()
	console.log(windowHeight)

	TweenMax.fromTo('#droplet',1.5, {opacity: 1, top: yValue + 45, scale: 0.5, left: xValue - 27}, 
		{opacity: 0, top: windowHeight - 80, scale: 1.5, left: xValue - 27});


	}); 



}); // end of document