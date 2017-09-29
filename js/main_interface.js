// $(document).ready(function() {


$(window).on('resize', function(event){
	var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize < 485){
    	$('html').css('background-color', '#F39C82');
    } else if (windowSize > 487){
    	$('html').css('background-color', '#F39C82');
    } else if(windowSize = 486){
    	$('html').css('background-color', '#C1F382');
    } else {
    	$('html').css('background-color', 'white');
    }
});

function animatedConsole(){
var snowTimer = 0; //declare our timer for setTimeout
var nl = "\n"

for (var i = 0; i < 40; i++) { //standard for loop to iterate for 80 console lines
    setTimeout(function() { // introduce the setTimout function
        var snow = ""; //empty string that will be filled below!

        for (var s = 0; s < 60; s++) { //for loop stating 40 characters per line
            var snowOrRain = Math.random()*100; 
            // // use snowOrRain to determine what combination of ❄, 💧, and " " each line has
            if (snowOrRain < 33) {
                snow += "▤▤▤▤▩▩▩▩ ▤▤▤▤▩▩▩▩ ▤▤▤▤▩▩▩▩ ▤▤▤▤▩▩▩▩"; //add snow to string
            }else if (snowOrRain > 33 && snowOrRain < 66){
                snow += "▤▩▤▩▤ ▩▤▩▤▩ ▤▩▤▩▤ ▩▤▩▤▩ ▤▩▤▩▤"; //add rain to string
            }else {
                snow += "▤▤▤▤▤ ▩▩▩▩▩ ▤▤▤▤▤ ▩▩▩▩▩ ▤▤▤▤▤ "; //add space to string
            }

        }
        console.log(snow); //output of snow string
    }, snowTimer); // snowTimer determines when the sleet string is released
    snowTimer += 70;
    }

  var newLine = '\n';
  var result = '';
  var result2 = '';
  var result3 = '';
  var result4 = '';
  var result5 = '';
  var result6 = '';
  var result7 = '';
  

  var t = 2900;
  for(var i=0; i<30; i++){
    setTimeout(function(){
      result += '▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩▩ ';
      console.log(result);
    },t)
    t+=100;
}

var s = 6000;
for (var i=0; i<40; i++){
	setTimeout(function(){
		result2 += '⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ' + newLine ;
		console.log(result2);
	}, s)
	s+=100;
	setTimeout(function(){
		result2 += '▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ' + newLine;
		console.log(result2);
	},s)
	s+=100;
}

var u = 12000;
for (var i=0; i<20; i++){
	setTimeout(function(){
		result3 += '⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩';
		console.log(result3);
	}, u)
	u+=100;
	setTimeout(function(){
		result3 += '▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅ ▩▩▩▩▩▩▩▩ ⧅⧅⧅⧅⧅⧅⧅⧅';
		console.log(result3);
	},u)
	u+=100;
}

  var v = 16000;
  for(var i=0; i<30; i++){
    setTimeout(function(){
      result4 += '⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
      console.log(result4);
    },v)
    v+=100;
}

  var w = 19000;
  for(var i=0; i<30; i++){
    setTimeout(function(){
      result5 += '▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ▩▩▩▩▩▩▩▩ ▥▥▥▥▥▥▥▥ ';
      console.log(result5);
    },w)
    w+=100;
}

  var y = 22000;
  for(var i=0; i<30; i++){
    setTimeout(function(){
      result6 += '▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ⬚⬚⬚⬚⬚⬚⬚⬚ ▤▤▤▤▤▤▤▤ ';
      console.log(result6);
    },y)
    y+=100;
}


  var a = 25000;
  for(var i=0; i<1; i++){
    setTimeout(function(){
      result7 += '■ ■ ■ ■         ■ ■ ■ ■       ■ ■ ■ ■       ■ ■ ■ ■ ■     ■ ■ ■ ■       ■ ■ ■ ■        ' + newLine;
      result7 += '■       ■     ■        ■     ■        ■     ■             ■       ■         ■       ■        ■   ' + newLine;
      result7 += '■       ■     ■        ■     ■ ■ ■ ■ ■      ■ ■ ■ ■       ■       ■         ■       ■        ■   '  + newLine;
      result7 += '■ ■ ■ ■       ■        ■     ■        ■     ■             ■ ■ ■ ■           ■       ■        ■    '   + newLine;
      result7 += '■      ■      ■        ■     ■         ■    ■             ■       ■         ■       ■        ■    '  + newLine;
      result7 += '■       ■      ■ ■ ■ ■         ■ ■ ■ ■      ■ ■ ■ ■ ■     ■        ■        ■        ■ ■ ■ ■      ' + newLine;
  
      console.log(result7);
    },a)  
	a +=100;
}

}

// });