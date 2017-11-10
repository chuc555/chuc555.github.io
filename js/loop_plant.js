$(document).ready(function() {

	var plantHt_01 = $('#plant_01').height(),
		plantHt_02 = $('#plant_02').height(),
		plantHt_03 = $('#plant_03').height(),
		plantHt_04 = $('#plant_04').height(),
		plantHt_05 = $('#plant_05').height(),
		plantHt_06 = $('#plant_06').height(),
		plantHt_07 = $('#plant_07').height();

	var heights = [plantHt_01, plantHt_02, plantHt_03, plantHt_04, plantHt_05, plantHt_06, plantHt_07];
	var start = [0,0,0,0,0,0,0];

	$('.leaves').hide();
	$('#bloom_01').hide();

	// ====================== checking for the cookie ====================== 
	if (Cookies.getJSON('allPlantHeights')){
		// get cookie information
		var savedHeights = Cookies.getJSON('allPlantHeights')
		console.log(savedHeights); //prints out the array of heights last left off

		// space to update each height in the array
		// use the 'each' function for plants to declare their new height
		$(".plants").each(function(){
			var plantIndex = $(".plants").index(this);
			var plantHeight = savedHeights[plantIndex];

			$(this).height(plantHeight)

			// if you decide to show leaves based on plant height:
			if(plantHeight > 50){
				$('#p1_leaf_01').show();
				$('#p1_leaf_02').show();
				$('#p1_leaf_03').show();
				$('#p1_leaf_04').show();

				$('#p2_leaf_01').show();
				$('#p2_leaf_02').show();
				$('#p2_leaf_03').show();
				$('#p2_leaf_04').show();
				$('#p2_leaf_05').show();
				$('#p2_leaf_06').show();
				$('#p2_leaf_07').show();
				$('#p2_leaf_08').show();

				$('#p3_leaf_01').show();
				$('#p3_leaf_02').show();
				$('#p3_leaf_03').show();
				$('#p3_leaf_04').show();

				$('#p4_leaf_01').show();
				$('#p4_leaf_02').show();
				$('#p4_leaf_03').show();
				$('#p4_leaf_04').show();

				$('#p5_leaf_01').show();
				$('#p5_leaf_02').show();
				$('#p5_leaf_03').show();
				$('#p5_leaf_04').show();
				$('#p5_leaf_05').show();

				$('#p6_leaf_01').show();
				$('#p6_leaf_02').show();
				$('#p6_leaf_03').show();
				$('#p6_leaf_04').show();
				$('#p6_leaf_05').show();

				$('#p7_leaf_01').show();
				$('#p7_leaf_02').show();
				$('#p7_leaf_03').show();
				$('#p7_leaf_04').show();
				$('#p7_leaf_05').show();

			} else if (plantHeight > 50){
				// note: p2_leaves 5-8 don't show when they're placed here? for now i'm putting them when plant height is greater than 30

			} else if (plantHeight > 70) {
				
				
			} else if ((plantHeight > 90) && (plantHeight < 500)) {
				
								
			};
		});

		Cookies.set('allPlantHeights',savedHeights, {expires: 10});
	
	} else { //if doesn't exist, set the cookie
		Cookies.set('allPlantHeights',start, {expires: 10});
	};


	// cookie for one plant:
	// if(Cookies.get('plantState')){
	// 		var currentCookieValue = Cookies.get('plantState')
	// 		console.log("currentCookieValue",currentCookieValue)

	// 		$('#plant_06').height(currentCookieValue);

	// } else {
	// 		Cookies.set('plantState',0, {expires: 10});
	// };
	

	// hide items at first, start counter at 0
	var counter = 0;
	
	// ====================== plant leaves appear with click ======================
	$(document).click(function(e) {
		var xValue = e.pageX
		console.log(counter++);

		var plantHeight = $(".plants").height();
		var plantHeight_06 = $("#plant_06").height();
		console.log("THIS IS HEIGHT" + plantHeight);

		//====== leaves for plant_01 ======
		if ((plantHeight > 29) && (plantHeight < 49) && (xValue > 0) && (xValue <200)) {
			$('#p1_leaf_01').show();
		} else if ((plantHeight > 49) && (plantHeight < 69) && (xValue > 0) && (xValue <200)) {
			$('#p1_leaf_03').show();
		} else if ((plantHeight > 69) && (plantHeight < 89) && (xValue > 0) && (xValue <200)) {
			$('#p1_leaf_02').show();
		} else if ((plantHeight > 89) && (plantHeight < 121) && (xValue > 0) && (xValue <200)) {
			$('#p1_leaf_04').show();
		};

		//====== leaves for plant_02 ======
		if ((counter == 3) && (xValue > 201) && (xValue <400)) {
			$('#p2_leaf_01').show();
		} else if ((counter == 5) && (xValue > 201) && (xValue <400)) {
			$('#p2_leaf_03').show();
		} else if ((counter == 7) && (xValue > 201) && (xValue <400)) {
			$('#p2_leaf_02').show();
		} else if ((counter == 9) && (xValue > 201) && (xValue <400)) {
			$('#p2_leaf_04').show();
		} else if ((counter == 12) && (xValue > 201) && (xValue <400)) {
			$('#p2_leaf_05').show();
		};

		//====== leaves for plant_03 ======
		if ((counter == 3) && (xValue > 401) && (xValue <600)) {
			$('#p3_leaf_01').show();
		} else if ((counter == 5) && (xValue > 401) && (xValue <600)) {
			$('#p3_leaf_03').show();
		} else if ((counter == 7) && (xValue > 401) && (xValue <600)) {
			$('#p3_leaf_02').show();
		} else if ((counter == 9) && (xValue > 401) && (xValue <600)) {
			$('#p3_leaf_04').show();
		} else if ((counter == 12) && (xValue > 401) && (xValue <600)) {
			$('#p3_leaf_05').show();
		};

		//====== leaves for plant_04 ======
		if ((counter == 3) && (xValue > 601) && (xValue <800)) {
			$('#p4_leaf_01').show();
		} else if ((counter == 5) && (xValue > 601) && (xValue <800)) {
			$('#p4_leaf_03').show();
		} else if ((counter == 7) && (xValue > 601) && (xValue <800)) {
			$('#p4_leaf_02').show();
		} else if ((counter == 9) && (xValue > 601) && (xValue <800)) {
			$('#p4_leaf_04').show();
		};

		//====== leaves for plant_05 ======
		if ((plantHeight > 29) && (plantHeight < 49) && (xValue > 801) && (xValue <970)) {
			$('#p5_leaf_01').show();
		} else if ((plantHeight > 49) && (plantHeight < 69) && (xValue > 801) && (xValue <970)) {
			$('#p5_leaf_03').show();
		} else if ((plantHeight > 69) && (plantHeight < 89) && (xValue > 801) && (xValue <970)) {
			$('#p5_leaf_02').show();
		} else if ((plantHeight > 89) && (plantHeight < 119) && (xValue > 801) && (xValue <970)) {
			$('#p5_leaf_04').show();
		} else if ((plantHeight > 119) && (plantHeight < 151) && (xValue > 801) && (xValue <970)) {
			$('#p5_leaf_05').show();
		};

		//====== leaves for plant_06 ======
		if ((plantHeight > 29) && (plantHeight < 49) && (xValue > 801) && (xValue <970)) {
			$('#p6_leaf_01').show();
		} else if ((plantHeight > 49) && (plantHeight < 69) && (xValue > 801) && (xValue <970)) {
			$('#p6_leaf_03').show();
		} else if ((plantHeight > 69) && (plantHeight < 89) && (xValue > 801) && (xValue <970)) {
			$('#p6_leaf_02').show();
		} else if ((plantHeight > 89) && (plantHeight < 119) && (xValue > 801) && (xValue <970)) {
			$('#p6_leaf_04').show();
		} else if ((plantHeight > 119) && (plantHeight < 200) && (xValue > 801) && (xValue <970)) {
			$('#p6_leaf_05').show();
		} else if ((plantHeight_06  > 250) && (plantHeight_06  < 400) && (xValue > 801) && (xValue <970)) {
			$('#bloom_01').show();
		};
		// console.log('PLANT 6 ' + plantHeight_06);

		//====== leaves for plant_07 ======
		if ((plantHeight > 29) && (plantHeight < 49) && (xValue > 1101) && (xValue <1300)) {
			$('#p7_leaf_01').show();
		} else if ((plantHeight > 49) && (plantHeight < 69) && (xValue > 1101) && (xValue <1300)) {
			$('#p7_leaf_03').show();
		} else if ((plantHeight > 69) && (plantHeight < 89) && (xValue > 1101) && (xValue <1300)) {
			$('#p7_leaf_02').show();
		} else if ((plantHeight > 89) && (plantHeight < 119) && (xValue > 1101) && (xValue <1300)) {
			$('#p7_leaf_04').show();
		} else if ((plantHeight > 119) && (plantHeight < 151) && (xValue > 1101) && (xValue <1300)) {
			$('#p7_leaf_05').show();
		};

	}); // end of click function

 	
 	// ====================== increasing plant stem height with click ======================
	$(document).click(function(e){ 
	 	var xValue = e.pageX
 		var yValue = e.pageY 
			console.log(xValue +', '+ yValue); 
		var windowHeight = $(window).height()
			// console.log(windowHeight)

		TweenMax.fromTo('#droplet',1.0, 
			{opacity: 1, top: yValue + 45, scale: 0.5, left: xValue - 27}, 
			{opacity: 0, top: windowHeight - 80, scale: 1.5, left: xValue - 27});

		if ((xValue > 0) && (xValue < 200)) {
			var plantHeight_01 = $('#plant_01').height();
			var newHeight_01 = plantHeight_01 + 10
			$('#plant_01').delay(1000).css('min-height',newHeight_01+'px');
		}

		if ((xValue > 201) && (xValue <400)) {
			var plantHeight_02 = $('#plant_02').height();
			var newHeight_02 = plantHeight_02 + 10;
			$('#plant_02').delay(1000).css('min-height',newHeight_02+'px');
		}

		if ((xValue > 401) && (xValue <600)) {
			var plantHeight_03 = $('#plant_03').height();
			var newHeight_03 = plantHeight_03 + 10;
			$('#plant_03').delay(1000).css('min-height',newHeight_03 +'px');
		}

		if ((xValue > 601) && (xValue <800)) {
			var plantHeight_04 = $('#plant_04').height();
			var newHeight_04 = plantHeight_04 + 10;
			$('#plant_04').delay(1000).css('min-height',newHeight_04+'px');	
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



		// Stuff for updating cookie for one plant on each click:
		// putting plant height into a variable
		// var currentHeight = $('#plant_06').height()
		// console.log("currentHeight: ", currentHeight);	

		// cookie set
		// Cookies.set('plantState',currentHeight, {expires: 10});
	
		// cookie read
		// var currentCookieValue = Cookies.get('plantState')
		// console.log("currentCookieValue",currentCookieValue)



		// Stuff for updating cookie on each click:
		// updating variables
		plantHt_01 = $('#plant_01').height(),
		plantHt_02 = $('#plant_02').height(),
		plantHt_03 = $('#plant_03').height(),
		plantHt_04 = $('#plant_04').height(),
		plantHt_05 = $('#plant_05').height(),
		plantHt_06 = $('#plant_06').height(),
		plantHt_07 = $('#plant_07').height();

		// updating array
		heights = [plantHt_01, plantHt_02, plantHt_03, plantHt_04, plantHt_05, plantHt_06, plantHt_07];

		var updatedHeights = [];
		$(".plants").each(function(){
			var plantsHeights = $(this).height()
			updatedHeights.push(plantsHeights);
		})

		// updating cookie with the new array
		Cookies.set('allPlantHeights', updatedHeights, {expires: 10})
		
		// get cookie info
		var currentHeightValues = Cookies.getJSON('allPlantHeights')
		console.log('currentHeightValues', currentHeightValues)

	}); // end of click function
		





}); // end of document