
// WINDOW RESIZE -> COLOR CHANGE
$(window).on('resize', function(event){
	var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize < 485){
    	$('html').css('background-color', '#F39C82');
    } else if (windowSize > 487){
    	$('html').css('background-color', '#F39C82');
    } else if(windowSize = 486){
    	$('html').css('background-color', '#C2F37F');
    } else {
    	$('html').css('background-color', 'white');
    }
});

// // AUDIO TRIGGERED BY BUTTON
//  $(document).ready(function() {
// var startAudio = new Audio('./sound/Doh_De_Oh.mp3');
// $('#audioButton').click(function (){
//   startAudio.play();
// });
// });

// ANIMATED CONSOLE TRIGGERED BY BUTTON
function animatedConsole(){
var snowTimer = 0; //declare our timer for setTimeout
var nl = "\n"

for (var i = 0; i < 30; i++) { //standard for loop to iterate for 80 console lines
    setTimeout(function() { // introduce the setTimout function
        var snow = ""; //empty string that will be filled below!

        for (var s = 0; s < 60; s++) { //for loop stating 40 characters per line
            var snowOrRain = Math.random()*100; 
            // // use snowOrRain to determine what combination of ❄, 💧, and " " each line has
            if (snowOrRain < 25) {
                snow += "▤▤▤▤▩▩▩▩ ▤▤▤▤▩▩▩▩ ▤▤▤▤▩▩▩▩ ▤▤▤▤▩▩▩▩"; //add snow to string
            }else if (snowOrRain > 25 && snowOrRain < 50){
                snow += "▤▩▤▩▤ ▩▤▩▤▩ ▤▩▤▩▤ ▩▤▩▤▩ ▤▩▤▩▤"; //add rain to string
            }else if (snowOrRain > 50 && snowOrRain < 75){
                snow += "⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ "; //add space to string
            }else if (snowOrRain > 75 && snowOrRain < 90){
                snow += " ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚  "
            }
        }
        console.log(snow); //output of snow string
    }, snowTimer); // snowTimer determines when the sleet string is released
    snowTimer += 100;
    }

  var newLine = '\n';
  var result = '';
  var result2 = '';
  var result3 = '';
  var result3a = '';
  var result4 = '';
  var result4a = '';
  var result4b = '';
  var result5 = '';
  var result5a = '';
  var result6 = '';
  var result6a = '';
  var result7a = '';
  var result7 = '';
  

var t = 2700;
  for(var i=0; i<30; i++){
    setTimeout(function(){
      result += '▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩▩ ';
      console.log(result);
    },t)
    t+=100;
}


var s = 5500;
for (var i=0; i<18; i++){
	setTimeout(function(){
		result2 += '▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚';
		console.log(result2);
	}, s)
	s+=100;
	setTimeout(function(){
		result2 += '▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩';
		console.log(result2);
	},s)
	s+=100;
    setTimeout(function(){
    result2 += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚  ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚';
    console.log(result2);
  },s)
  s+=100;
}


var ua = 8000;
for (var i=0; i<20; i++){
  setTimeout(function(){
    result3a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ⬚▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ▩▩⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩⬚⬚⬚▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚⬚ ▩▩⬚⬚⬚⬚▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ⬚▩▩⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚⬚▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ⬚▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚▩▩⬚⬚⬚⬚⬚ ⬚▩⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚▩▩⬚⬚⬚ ⬚▩▩⬚⬚⬚⬚⬚ ⬚▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚▩▩⬚⬚▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ▩▩⬚⬚⬚⬚▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚⬚ ▩▩⬚⬚⬚▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ⬚▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result3a);
  }, ua)
  ua+=100;
// }
// var u = 18000;
// for (var i=0; i<30; i++){
  setTimeout(function(){
    result3 += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result3);
  }, ua)
  ua+=150;
}

  var v = 10700;
  for(var i=0; i<18; i++){
    setTimeout(function(){
      result4 += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚▩⬚⬚⬚⬚▩▩ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ';
      console.log(result4);
    },v)
    v+=100;
        setTimeout(function(){
      result4 += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩▩⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚▩⬚▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩⬚▩⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩⬚⬚▩⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩⬚⬚▩▩⬚▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚▩▩⬚▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
      console.log(result4);
    },v)
    v+=100;
}


var ba = 13000;
for (var i=0; i<20; i++){
  setTimeout(function(){
    result4a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩⬚⬚ ▩⬚▩⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚▩▩⬚⬚▩▩▩ ▩⬚▩▩⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚▩⬚▩ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ▩⬚▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚▩▩ ▩▩⬚⬚⬚▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚⬚⬚▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ▩▩▩▩⬚▩▩▩ ⬚⬚⬚⬚▩⬚⬚⬚ ▩▩⬚▩▩⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚▩▩⬚▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result4a);
  }, ba)
  ba+=100;
// }
// var b = 27000;
// for (var i=0; i<30; i++){
  setTimeout(function(){
    result4b += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩▩▩ ▩▩⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result4b);
  }, ba)
  ba+=150;
}


var w = 14500;
for (var i=0; i<18; i++){
  setTimeout(function(){
    result2 += '▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚';
    console.log(result2);
  }, w)
  w+=100;
  setTimeout(function(){
    result2 += '▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩';
    console.log(result2);
  },w)
  w+=100;
    setTimeout(function(){
    result2 += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚  ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚';
    console.log(result2);
  },w)
  w+=100;
}


var c = 19200;
for (var i=0; i<20; i++){
  setTimeout(function(){
    result5a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩⬚⬚▩⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚▩ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩⬚⬚⬚▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩⬚▩▩⬚⬚⬚▩ ▩⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚▩ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩⬚▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚▩▩⬚⬚▩ ▩▩⬚▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚▩ ▩⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚▩▩▩▩▩ ⬚⬚▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚▩▩⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ⬚▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚⬚⬚▩⬚ ▩▩▩▩⬚⬚⬚⬚ ▩⬚▩⬚⬚⬚⬚⬚ ▩⬚⬚▩▩▩⬚▩ ▩⬚⬚▩▩⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩⬚⬚⬚▩▩ ▩⬚▩⬚⬚▩⬚▩ ⬚⬚▩⬚⬚⬚⬚⬚ ▩▩⬚▩⬚⬚⬚⬚ ▩▩▩⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩⬚⬚▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result5a);
  }, c)
  c+=100;

    setTimeout(function(){
    result5a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ▩▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result5a);
  }, c)
  c+=150;
}


var y = 23000;
for (var i=0; i<18; i++){
  setTimeout(function(){
    result6 += '▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚▩ ▩▩▩▩▩▩▩⬚';
    console.log(result6);
  }, y)
  y+=100;
  setTimeout(function(){
    result2 += '▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ▩▩▩▩⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩';
    console.log(result6);
  },y)
  y+=100;
    setTimeout(function(){
    result2 += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚  ⬚⬚⬚⬚⬚⬚▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ▩▩▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚';
    console.log(result6);
  },y)
  y+=100;
}



var f = 26000;
for (var i=0; i<20; i++){
  setTimeout(function(){
    result6a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚▩ ⬚⬚▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩⬚⬚▩▩ ▩⬚⬚▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚▩⬚ ▩▩▩⬚⬚⬚▩⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚▩ ⬚⬚▩⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩⬚⬚▩⬚▩ ▩⬚▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result6a);
  }, f)
  f+=100;

    setTimeout(function(){
    result6a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩ ▩⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩▩▩▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩▩▩▩▩▩ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩▩⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
    console.log(result6a);
  }, f)
  f+=100;
}


var g = 29000;
  for(var i=0; i<18; i++){
    setTimeout(function(){
      result7a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚▩⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ⬚▩⬚⬚⬚⬚▩▩ ⬚⬚▩▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩▩▩⬚⬚⬚ ▩▩⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩▩⬚⬚ ⬚⬚▩▩⬚⬚⬚⬚ ';
      console.log(result7a);
    },g)
    g+=100;
        setTimeout(function(){
      result7a += '⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩▩⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚▩▩⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩⬚⬚▩⬚▩▩⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩▩⬚▩⬚▩▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚▩⬚⬚▩⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚▩▩⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩⬚⬚▩▩⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚⬚⬚⬚⬚⬚⬚⬚ ⬚▩⬚⬚▩▩⬚▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ▩▩⬚⬚▩▩⬚▩ ⬚⬚⬚⬚⬚⬚⬚⬚ ';
      console.log(result7a);
    },g)
    g+=100;
}


var a = 33000;
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

