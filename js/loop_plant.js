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
	}); // end of function
 	

	$(document).click(function(e){ 
	 	var xValue = e.pageX
 		var yValue = e.pageY 
			console.log(xValue +', '+ yValue); 
		var windowHeight = $(window).height()
			console.log(windowHeight)

		TweenMax.fromTo('#droplet',1.0, 
			{opacity: 1, top: yValue + 45, scale: 0.5, left: xValue - 27}, 
			{opacity: 0, top: windowHeight - 80, scale: 1.5, left: xValue - 27});

		if ((xValue > 0) && (xValue < 200)) {
			var plantHeight_02 = $('#plant_02').height();
			var newHeight_02 = plantHeight_02 + 10;
			$('#plant_02').delay(1000).css('min-height',newHeight_02+'px');
		}

		if ((xValue > 201) && (xValue <400)) {
			var plantHeight_03 = $('#plant_03').height();
			var newHeight_03 = plantHeight_03 + 10;
			$('#plant_03').delay(1000).css('min-height',newHeight_03+'px');
		}

		if ((xValue > 401) && (xValue <600)) {
			var plantHeight_04 = $('#plant_04').height();
			var newHeight_04 = plantHeight_04 + 10;
			$('#plant_04').delay(1000).css('min-height',newHeight_04+'px');
		}

		if ((xValue > 601) && (xValue <800)) {
			var plantHeight = $('#plant').height();
			var newHeight = plantHeight + 10;
			$('#plant').delay(1000).css('min-height',newHeight+'px');	
		}

		if ((xValue > 801) && (xValue <970)) {
			var plantHeight_05 = $('#plant_05').height();
			var newHeight_05 = plantHeight_05 + 10;
			$('#plant_05').delay(1000).css('min-height',newHeight_05+'px');	
		}

		if ((xValue > 971) && (xValue <1100)) {
			var plantHeight_06 = $('#plant_06').height();
			var newHeight_06 = plantHeight_06 + 10;
			$('#plant_06').delay(1000).css('min-height',newHeight_06+'px');	
		}

		if ((xValue > 1101) && (xValue <1300)) {
			var plantHeight_07 = $('#plant_07').height();
			var newHeight_07 = plantHeight_07 + 10;
			$('#plant_07').delay(1000).css('min-height',newHeight_07+'px');	
		}

	var currentHeight = $('#plant_06').css("height")
	console.log("currentHeight: ", currentHeight);	



	Cookies.set('plantState',currentHeight, {expires: 10});
	
	var currentCookieValue = Cookies.get('plantState')
	console.log("currentCookieValue",currentCookieValue)
	}); 

var newFunction = function(){

}



}); // end of document