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
	$('#bloom_02').hide();
	$('#bloom_03').hide();
	$('#bloom_04').hide();
	$('#bloom_05').hide();
	$('#bloom_06').hide();
	$('#bloom_07	').hide();
	

	// ====================== checking for the cookie ====================== 
	if (Cookies.getJSON('allPlantHeights')){
		// get cookie information
		var savedHeights = Cookies.getJSON('allPlantHeights')
		console.log(savedHeights); //prints out the array of heights last left off

		if (Cookies.getJSON('plant_03_date')){
			var plantDay = Cookies.getJSON('plant_03_date');
			var d = new Date();
			var currentDay = d.getDate();
			var difference = currentDay - plantDay;

			console.log(difference);

		if (difference >= 0 && difference < 3){
				// stay green
			}
		}




		// space to update each height in the array
		// use the 'each' function for plants to declare their new height
		$(".plants").each(function(){
			var plantIndex = $(".plants").index(this);
			var plantHeight = savedHeights[plantIndex];

			$(this).height(plantHeight)

		 // ======== show plant leaves based on plant height =========
			if(plantHeight > 50){
				$('#p1_leaf_01').show();
				$('#p2_leaf_01').show();
				$('#p3_leaf_01').show();
				$('#p4_leaf_01').show();
				$('#p5_leaf_01').show();
				$('#p6_leaf_01').show();
				$('#p7_leaf_01').show();
			};
			if (plantHeight > 70 && plantHeight < 450){
				$('#p1_leaf_03').show();
				$('#p2_leaf_03').show();
				$('#p3_leaf_03').show();
				$('#p4_leaf_03').show();
				$('#p5_leaf_03').show();
				$('#p6_leaf_03').show();
				$('#p7_leaf_03').show();
			};
			if (plantHeight > 90 && plantHeight < 450){
				$('#p1_leaf_02').show();
				$('#p2_leaf_02').show();
				$('#p3_leaf_02').show();
				$('#p4_leaf_02').show();
				$('#p5_leaf_02').show();
				$('#p6_leaf_02').show();
				$('#p7_leaf_02').show();

			};
			if (plantHeight > 110 && plantHeight < 450) {
				$('#p1_leaf_04').show();
				$('#p2_leaf_04').show();
				$('#p3_leaf_04').show();
				$('#p4_leaf_04').show();
				$('#p5_leaf_04').show();
				$('#p6_leaf_04').show();
				$('#p7_leaf_04').show();				
			};
			if (plantHeight > 130 && plantHeight < 450) {
				$('#p1_leaf_05').show();
				$('#p2_leaf_05').show();
				$('#p3_leaf_05').show();
				$('#p4_leaf_05').show();
				$('#p5_leaf_05').show();
				$('#p6_leaf_05').show();
				$('#p7_leaf_05').show();				
			};
			if (plantHeight > 150 && plantHeight < 450) {
				$('#p1_leaf_06').show();
				$('#p2_leaf_06').show();
				$('#p3_leaf_06').show();
				$('#p4_leaf_06').show();
				$('#p5_leaf_06').show();
				$('#p6_leaf_06').show();
				$('#p7_leaf_06').show();				
			};	
			if (plantHeight > 170 && plantHeight < 450) {
				$('#p1_leaf_07').show();
				$('#p2_leaf_07').show();
				$('#p3_leaf_07').show();
				$('#p4_leaf_07').show();
				$('#p5_leaf_07').show();
				$('#p6_leaf_07').show();
				$('#p7_leaf_07').show();				
			};
			if (plantHeight > 190 && plantHeight < 450) {
				$('#p1_leaf_08').show();
				$('#p2_leaf_08').show();
				$('#p3_leaf_08').show();
				$('#p4_leaf_08').show();
				$('#p5_leaf_08').show();
				$('#p6_leaf_08').show();
				$('#p7_leaf_08').show();
	
				$('#bloom_03').show();		
			};	
			if (plantHeight == 290){
				$('#bloom_06').show();	
			};			
			if (plantHeight == 300){
				$('#bloom_01').show();	
				$('#bloom_03').show();	
			};
			if (plantHeight == 350){
				$('#bloom_05').show();
			};
			if (plantHeight == 370){
				$('#bloom_07').show();
			};
			if (plantHeight == 400){
				$('#bloom_04').show();
			};
			if (plantHeight == 420){
				$('#bloom_02').show();
			};											
		});


		$('.plants').click(function(){
			console.log($(this).height());
			console.log('hello');
    		if($(this).height() <= 300){
       		 	// $('#plant_03').css('max-height', '300px'); //set max height
    		} else {
        		$('#plant_03').css('height','300px');
    		};
		});

		Cookies.set('allPlantHeights',savedHeights, {expires: 10});
	} else { //if doesn't exist, set the cookie
		Cookies.set('allPlantHeights',start, {expires: 10});
	}; // end of cookie if statement


	// hide items at first, start counter at 0
	var counter = 0;


	
 	
 	// ====================== increasing plant stem height with click ======================
	$(document).click(function(e){ 

	 	var xValue = e.pageX
 		var yValue = e.pageY 
			console.log(xValue +', '+ yValue); 
		var windowHeight = $(window).height()
			// console.log(windowHeight)

		TweenMax.set('#droplet',{opacity: 1 });
		TweenMax.fromTo('#droplet',1.0, 
			{opacity: 1, top: yValue + 45, scale: 0.5, left: xValue - 27}, 
			{opacity: 0, top: windowHeight - 80, scale: 1.5, left: xValue - 27});

		// =========== stem region 1 =========== 
		if ((xValue > 150) && (xValue < 205)) {
			var plantHeight_01 = $('#plant_01').height();
			var newHeight_01 = plantHeight_01 + 10;
			// $('#plant_01').delay(1000).css('min-height',newHeight_01+'px');
			
			//setting max height
			if($('#plant_01').height() <= 300){
				$('#plant_01').delay(1000).css('height',newHeight_01 +'px');
				console.log('p1 equal/less than 300');
    		} else {
        		$('#plant_01').css('height','300px'); 
        		console.log('p1 more than 300');
    		};
		}

		// =========== stem region 2 =========== 
		if ((xValue > 205) && (xValue <410)) {
			var plantHeight_02 = $('#plant_02').height();
			var newHeight_02 = plantHeight_02 + 10;
			// $('#plant_02').delay(1000).css('min-height',newHeight_02+'px');

			if($('#plant_02').height() <= 420){
				$('#plant_02').delay(1000).css('height',newHeight_02 +'px');
				console.log('p2 equal/less than 420');
    		} else {
        		$('#plant_02').css('height','420px'); 
        		console.log('p2 more than 420');
    		};
		}

		// =========== stem region 3 =========== 
		if ((xValue > 410) && (xValue <615)) {
			var plantHeight_03 = $('#plant_03').height();
			var newHeight_03 = plantHeight_03 + 10;
			// $('#plant_03').delay(1000).css('min-height',newHeight_03 +'px');

			if($('#plant_03').height() <= 300){
				$('#plant_03').delay(1000).css('height',newHeight_03 +'px');
				console.log('equal/less than 300');
    		} else {
        		$('#plant_03').css('height','300px');
        		console.log('more than 300');
    		};
		
		var d = new Date();
		var n = d.getDate()
		console.log(n);

		Cookies.set('plant_03_date', n, {expires: 10});

		}

		// =========== stem region 4 =========== 
		if ((xValue > 615) && (xValue <820)) {
			var plantHeight_04 = $('#plant_04').height();
			var newHeight_04 = plantHeight_04 + 10;
			// $('#plant_04').delay(1000).css('min-height',newHeight_04+'px');	
			if($('#plant_04').height() <= 400){
				$('#plant_04').delay(1000).css('height',newHeight_04 +'px');
				console.log('equal/less than 400');
    		} else {
        		$('#plant_04').css('height','400px');
        		console.log('more than 400');
    		};		
		}

		// =========== stem region 5 =========== 
		if ((xValue > 820) && (xValue <1025)) {
			var plantHeight_05 = $('#plant_05').height();
			var newHeight_05 = plantHeight_05 + 10;
			// $('#plant_05').delay(1000).css('min-height',newHeight_05+'px');	
			if($('#plant_05').height() <= 350){
				$('#plant_05').delay(1000).css('height',newHeight_05 +'px');
				console.log('equal/less than 350');
    		} else {
        		$('#plant_04').css('height','350px');
        		console.log('more than 350');
    		};			
		}

		// =========== stem region 6 ===========
		if ((xValue > 1025) && (xValue <1230)) {
			var plantHeight_06 = $('#plant_06').height();
			var newHeight_06 = plantHeight_06 + 10;
			// $('#plant_06').delay(1000).css('min-height',newHeight_06+'px');

			if($('#plant_06').height() <= 290){
				$('#plant_06').delay(1000).css('height',newHeight_06 +'px');
				console.log('equal/less than 290');
    		} else {
        		$('#plant_06').css('height','290px');
        		console.log('more than 290');
    		};	

		}

		// =========== stem region 7 ===========
		if ((xValue > 1230) && (xValue <1300)) {
			var plantHeight_07 = $('#plant_07').height();
			var newHeight_07 = plantHeight_07 + 10;
			// $('#plant_07').delay(1000).css('min-height',newHeight_07+'px');	
			if($('#plant_07').height() <= 370){
				$('#plant_07').delay(1000).css('height',newHeight_07 +'px');
				console.log('equal/less than 370');
    		} else {
        		$('#plant_07').css('height','370px');
        		console.log('more than 370');
    		};	
		}



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
		console.log('currentHeightValues: ', currentHeightValues)

	}); // end of click function
		





}); // end of document