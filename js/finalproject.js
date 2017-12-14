$(document).ready(function(){

	console.log("let's party")


  $.ajax({
      url: "http://api.aerisapi.com/sunmoon/new+york,ny?from=12/1/2017&to=12/31/2017&limit=31&client_id=RYKd6OkQ0wMCnI251nZFU&client_secret=fl3umvN9IydoTwbh9pHffSmOLkdIJxZ5yXnqoO9M",
      dataType: "jsonp",
      success: function getMoon(json) {
        if (json.success == true) {
          // var ob = json.response.ob;
          // $('#js').html('The current weather in Seattle is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');

          console.log(json.response);

          // CURRENT DATE
          var today = new Date(),
              dd = today.getDate();
          console.log("current date: " + dd);

          // CURRENT TIME
          var timeStamp = today.toString();
          var timeArray = timeStamp.split(" ");
          var currentTime = timeArray[4]
          console.log("current time: " + currentTime);
          
          // CURRENT SUN RISE, SUN SET, MOON RISE TIMES   
          var sunRise = json.response[dd].sun.rise;
              sunRiseInfo = new Date(sunRise * 1000).toString();
              sunRiseArray = sunRiseInfo.split(" ");
              currentSunRise = sunRiseArray[4];
          console.log("today's sun rise: " + currentSunRise);

          var sunSet = json.response[dd].sun.set;
              sunSetInfo = new Date(sunSet * 1000).toString();
              sunSetArray = sunSetInfo.split(" ");
              currentSunSet = sunSetArray[4];
          console.log("today's sun set: " + currentSunSet);

          var moonRise = json.response[dd].moon.rise;
              moonRiseInfo = new Date(moonRise * 1000).toString();
              moonRiseArray = moonRiseInfo.split(" ");
              currentMoonRise = moonRiseArray[4];
          console.log("today's moon rise: " + currentMoonRise);

          // CHANGING COLOR TONE 
          if (currentTime == currentSunRise) {
            // do something
          }

          // CHANGING LIGHT OPACITY  
          // convert current illuminosity number into a decimal
          var moonLight = json.response[dd].moon.phase.illum,
              lightPercent = 1 - (moonLight/100);
              console.log(lightPercent);


          // CHANGING LIGHT RADIUS
          // based on age of moon phase in days
          var moonAge = json.response[dd].moon.phase.age,
              lightRadius = (moonAge/31)* 300;
              console.log(lightRadius);


          // UPDATING CSS 
          $(".light").css("background", "-webkit-radial-gradient("+ lightRadius +"px "+ lightRadius +"px, circle contain, rgba(38, 38, 38, "+ lightPercent + "), rgba(29, 29, 29, 0.96)) center center")


          // CHANGING FAVICON W/ MOON PHASE
          function change_favicon(img) {
          var favicon = document.querySelector('link[rel="shortcut icon"]');
    
          if (!favicon) {
            favicon = document.createElement('link');
            favicon.setAttribute('rel', 'shortcut icon');
            var head = document.querySelector('head');
            head.appendChild(favicon);
          }
          favicon.setAttribute('type','image/png');
          favicon.setAttribute('href', img);
          }

          var moonPhaseName = json.response[dd].moon.phase.name;
          console.log(moonPhaseName);

          if (moonPhaseName == "new moon") {
            change_favicon('./img/favicon_newmoon.png');
            $('#square').mouseenter(function(){
              $('#moon_newmoon').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_newmoon').fadeOut(600);
            });            
          } else if (moonPhaseName == "waxing crescent") {
            change_favicon('./img/favicon_waxingcrescent.png')
            $('#square').mouseenter(function(){
              $('#moon_newmoon').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_newmoon').fadeOut(600);
            }); 
          } else if (moonPhaseName == "first quarter") {
            change_favicon('./img/favicon_firstqtr.png') 
            $('#square').mouseenter(function(){
              $('#moon_newmoon').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_newmoon').fadeOut(600);
            });                         
          } else if (moonPhaseName == "waxing gibbous") {
            change_favicon('./img/favicon_waxinggib.png')
            $('#square').mouseenter(function(){
              $('#moon_newmoon').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_newmoon').fadeOut(600);
            });              
          } else if (moonPhaseName == "full moon") {
            change_favicon('./img/favicon_moonface.png')
            $('#square').mouseenter(function(){
              $('#moon_newmoon').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_newmoon').fadeOut(600);
            });              
          } else if (moonPhaseName == "waning gibbous") {
            change_favicon('./img/favicon_waninggib.png')
            $('#square').mouseenter(function(){
              $('#moon_newmoon').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_newmoon').fadeOut(600);
            });              
          } else if (moonPhaseName == "last quarter") {
            change_favicon('./img/favicon_lastqtr.png')
            $('#square').mouseenter(function(){
              $('#moon_lastqtr').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_lastqtr').fadeOut(600);
            });
          };
          } else if (moonPhaseName == "waning crescent") {
            change_favicon('./img/favicon_waningcrescent.png');
            $('#square').mouseenter(function(){
              $('#moon_waningcrescent').fadeIn(600);
            });
          $('#square').mouseleave(function(){
              $('#moon_waningcrescent').fadeOut(600);
            });
          };


          // $('#square').mouseenter(function(){
          //     $('#moon_waningcrescent').fadeIn(600);
          //   });
          // $('#square').mouseleave(function(){
          //     $('#moon_waningcrescent').fadeOut(600);
          //   });





        } // json if statement end
        
        else {
               alert('An error occurred: ' + json.error.description);
        }
      } //function getMoon end

  }); // ajax end
 

//LIGHT MOVING WITH MOUSE
var light = document.getElementById('light');
light.onmousemove = function(event) {
  this.style.backgroundPosition = (event.clientX-200) + 'px ' + (event.clientY-200) + 'px';
}



// what is this canvas


// window.addEventListener('load', eventWindowLoaded, false);

//         var Debugger = function() {};

//         Debugger.log = function(message) {
//             try {
//                 console.log(message);
//             } catch (exception) {
//                 return;
//             }
//         };

//         function eventWindowLoaded() {
//             canvasApp();
//         }

//         function canvasApp() {
//             Debugger.log('Drawing Canvas');


//             var canvas = document.getElementById('canvas');
//             var ctx = canvas.getContext('2d');

//             var w = canvas.width = window.innerWidth;
//             var h = canvas.height = window.innerHeight;

//             function reOffset() {
//                 var BB = canvas.getBoundingClientRect();
//                 offsetX = BB.left;
//                 offsetY = BB.top;
//             }

//             var offsetX, offsetY;
//             reOffset();

//             window.onscroll = function(e) {
//                 reOffset();
//             };

//             window.onresize = function(e) {
//                 reOffset();
//             };

//             canvas.addEventListener('mousemove', mouseMove, false);
//             canvas.addEventListener('touchmove', mouseMove, false);

//             function draw(cx, cy, radius) {
//                 ctx.save();
//                 ctx.clearRect(0, 0, w, h);

//                 var radialGradient = ctx.createRadialGradient(cx, cy, 1, cx, cy, radius);

//                 radialGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
//                 radialGradient.addColorStop(.65, 'rgba(0, 0, 0, 1)');
//                 radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

//                 ctx.beginPath();

//                 ctx.fillStyle = '#262626';
//                 ctx.fillRect(0, 0, w, h);

//                 ctx.globalCompositeOperation = 'destination-out';

//                 ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
//                 ctx.fillStyle = radialGradient;
//                 ctx.fill();

//                 ctx.restore();
//             }

//             function mouseMove(e) {
//                 e.preventDefault();
//                 e.stopPropagation();

//                 mouseX = parseInt(e.clientX - offsetX);
//                 mouseY = parseInt(e.clientY - offsetY);

//                 draw(mouseX, mouseY, 100);
//             }
//             draw(w / 2, h / 2, 100);
//         }


// SCROLL  
// $('body,html').animate({ scrollTop: $('body').height() }, 150000);



}); // document ready end
