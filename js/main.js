$(document).ready(function() {
  
// 1 HELLO WORLD PAGE
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".happiness_text").addClass("test");
    } else {
      $(".happiness_text").removeClass("test");
    }

        if ($(document).scrollTop() > 50) {
      $(".luck_text").addClass("test");
    } else {
      $(".luck_text").removeClass("test");
    }
  });


// 2 HIDDEN PATTERN PAGE


var pattern1 = ["⬡⬡⬡⬡⬡⬢⬢⬢⬢⬢","⬡⬡⬡⬡⬡⬢⬢⬢⬢⬢","⬡⬡⬡⬡⬡⬢⬢⬢⬢⬢","⬡⬡⬡⬡⬡⬢⬢⬢⬢⬢"];
var pattern2 = ["⬢⬢⬢⬢⬢⬡⬡⬡⬡⬡","⬢⬢⬢⬢⬢⬡⬡⬡⬡⬡","⬢⬢⬢⬢⬢⬡⬡⬡⬡⬡","⬢⬢⬢⬢⬢⬡⬡⬡⬡⬡"];
var pattern3 = ["▲▲▲▲▲▲▲▲△△△△△△△","▲▲▲▲▲▲▲▲△△△△△△△△","▲▲▲▲▲▲▲▲△△△△△△△△","▲▲▲▲▲▲▲▲△△△△△△△△","▲▲▲▲▲▲▲▲△△△△△△△△"]
var pattern4 = ["△△△△△△△△▲▲▲▲▲▲▲▲","△△△△△△△△▲▲▲▲▲▲▲▲","△△△△△△△△▲▲▲▲▲▲▲▲","△△△△△△△△▲▲▲▲▲▲▲▲","△△△△△△△△▲▲▲▲▲▲▲▲"]

var pattern5 = ["▓▓▓▓▓▓▓▓░░░░░░░░","▓▓▓▓▓▓▓▓░░░░░░░░","▓▓▓▓▓▓▓▓░░░░░░░░","▓▓▓▓▓▓▓▓░░░░░░░░","▓▓▓▓▓▓▓▓░░░░░░░░"]
var pattern6 = ["░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓"]
  
var timer = 0;
var timer2 = 0;


// for (var m = 0; m < 7; m++) {

//   setTimeout (function(){
//   for (var i = 0; i < 3; i++) {
//   var outPutString1 = " "
//     for (var x = 0; x <= 8; x++){
//       outPutString1 += pattern1[i];
//       }
//     console.log(outPutString1);
//     }
//  }, 500);

//   setTimeout (function(){
//   for (var h = 0; h < 3; h++) {
//   var outPutString2 = " "
//     for (var j = 0; j <= 8; j++){
//       outPutString2 += pattern2[h];
//       }
//     console.log(outPutString2);
//     }
//   }, 1000);
// }


setTimeout (function(){
  for (var i = 0; i < 3; i++) {
  var outPutString1 = " "
  for (var x = 0; x <= 4; x++){
    outPutString1 += pattern1[i];
  }
  console.log(outPutString1);
}
}, 200);

setTimeout (function(){
for (var h = 0; h < 3; h++) {
  var outPutString2 = " "
  for (var j = 0; j <= 4; j++){
    outPutString2 += pattern2[h];
  }
  console.log(outPutString2);
}
}, 400);

setTimeout (function(){
  for (var i = 0; i < 3; i++) {
  var outPutString1 = " "
  for (var x = 0; x <= 4; x++){
    outPutString1 += pattern1[i];
  }
  console.log(outPutString1);
}
}, 800);

setTimeout (function(){
for (var h = 0; h < 3; h++) {
  var outPutString2 = " "
  for (var j = 0; j <= 4; j++){
    outPutString2 += pattern2[h];
  }
  console.log(outPutString2);
}
}, 1000);

setTimeout (function(){
  for (var i = 0; i < 3; i++) {
  var outPutString1 = " "
  for (var x = 0; x <= 4; x++){
    outPutString1 += pattern1[i];
  }
  console.log(outPutString1);
}
}, 1200);

setTimeout (function(){
for (var h = 0; h < 3; h++) {
  var outPutString2 = " "
  for (var j = 0; j <= 4; j++){
    outPutString2 += pattern2[h];
  }
  console.log(outPutString2);
}
}, 1400);

setTimeout (function(){
  for (var i = 0; i < 3; i++) {
  var outPutString1 = " "
  for (var x = 0; x <= 4; x++){
    outPutString1 += pattern1[i];
  }
  console.log(outPutString1);
}
}, 1600);

setTimeout (function(){
for (var h = 0; h < 3; h++) {
  var outPutString2 = " "
  for (var j = 0; j <= 4; j++){
    outPutString2 += pattern2[h];
  }
  console.log(outPutString2);
}
}, 1800);

setTimeout (function(){
  for (var i = 0; i < 3; i++) {
  var outPutString1 = " "
  for (var x = 0; x <= 4; x++){
    outPutString1 += pattern1[i];
  }
  console.log(outPutString1);
}
}, 2000);

setTimeout (function(){
  for (var b = 0; b < 3; b++) {
    var outPutString3 = " "
    for (var k = 0; k <= 4; k++){
      outPutString3 += pattern3[k];
    }
    console.log(outPutString3);
  }
}, 2200);

setTimeout (function(){
  for (var l = 0; l < 3; l++) {
    var outPutString4 = " "
    for (var a = 0; a <= 4; a++){
      outPutString4 += pattern4[l];
    }
    console.log(outPutString4);
  }
}, 2400);

setTimeout (function(){
  for (var b = 0; b < 3; b++) {
    var outPutString3 = " "
    for (var k = 0; k <= 4; k++){
      outPutString3 += pattern3[k];
    }
    console.log(outPutString3);
  }
}, 2600);

setTimeout (function(){
  for (var l = 0; l < 3; l++) {
    var outPutString4 = " "
    for (var a = 0; a <= 4; a++){
      outPutString4 += pattern4[l];
    }
    console.log(outPutString4);
  }
}, 2800);

setTimeout (function(){
  for (var b = 0; b < 3; b++) {
    var outPutString3 = " "
    for (var k = 0; k <= 4; k++){
      outPutString3 += pattern3[k];
    }
    console.log(outPutString3);
  }
}, 3000);

setTimeout (function(){
  for (var l = 0; l < 3; l++) {
    var outPutString4 = " "
    for (var a = 0; a <= 4; a++){
      outPutString4 += pattern4[l];
    }
    console.log(outPutString4);
  }
}, 3200);

setTimeout (function(){
  for (var b = 0; b < 3; b++) {
    var outPutString3 = " "
    for (var k = 0; k <= 4; k++){
      outPutString3 += pattern3[k];
    }
    console.log(outPutString3);
  }
}, 3400);

setTimeout (function(){
  for (var l = 0; l < 3; l++) {
    var outPutString4 = " "
    for (var a = 0; a <= 4; a++){
      outPutString4 += pattern4[l];
    }
    console.log(outPutString4);
  }
}, 3600);

setTimeout (function(){
  for (var c = 0; c < 3; c++) {
    var outPutString5 = " "
    for (var d = 0; d <= 4; d++){
      outPutString5 += pattern5[c];
    }
    console.log(outPutString5);
  }
}, 3800);

setTimeout (function(){
  for (var e = 0; e < 3; e++) {
    var outPutString6 = " "
    for (var f = 0; f <= 4; f++){
      outPutString6 += pattern6[e];
    }
    console.log(outPutString6);
  }
}, 4000);

setTimeout (function(){
  for (var c = 0; c < 3; c++) {
    var outPutString5 = " "
    for (var d = 0; d <= 4; d++){
      outPutString5 += pattern5[c];
    }
    console.log(outPutString5);
  }
}, 4200);

setTimeout (function(){
  for (var e = 0; e < 3; e++) {
    var outPutString6 = " "
    for (var f = 0; f <= 4; f++){
      outPutString6 += pattern6[e];
    }
    console.log(outPutString6);
  }
}, 4400);

setTimeout (function(){
  for (var c = 0; c < 3; c++) {
    var outPutString5 = " "
    for (var d = 0; d <= 4; d++){
      outPutString5 += pattern5[c];
    }
    console.log(outPutString5);
  }
}, 4400);

setTimeout (function(){
  for (var e = 0; e < 3; e++) {
    var outPutString6 = " "
    for (var f = 0; f <= 4; f++){
      outPutString6 += pattern6[e];
    }
    console.log(outPutString6);
  }
}, 4600);

setTimeout (function(){
  for (var c = 0; c < 3; c++) {
    var outPutString5 = " "
    for (var d = 0; d <= 4; d++){
      outPutString5 += pattern5[c];
    }
    console.log(outPutString5);
  }
}, 4800);

setTimeout (function(){
  for (var e = 0; e < 3; e++) {
    var outPutString6 = " "
    for (var f = 0; f <= 4; f++){
      outPutString6 += pattern6[e];
    }
    console.log(outPutString6);
  }
}, 5000);






// final bracket of document
});





//going backwards
  // for (let starArrayIndex = starArray.length - 1; starArrayIndex >=0; starArrayIndex--) {
  //   console.log(starArray[starArrayIndex]);
  // }

//for loops follow this pattern
  // for (let i = 0; i < myArray.length; i++) {
  //     console.log(myArray[i]);
  // }

//using mathematical operators in the console
  // console.log("what's up dog");
  // console.log(3+5);
  // console.log("lol".length);
  // console.log('Hello'.toUpperCase());
  // console.log(Math.floor(Math.random()*50));
  // console.log(Math.floor(Math.random()*50));

//string interpolation
  // var myName = 'Connie';
  // var myCity = 'London';
  // console.log(myName);
  // console.log(myCity);
  // console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//truthy values
  // var isPhoneCharged = true;
  // if (!isPhoneCharged) {
  //   console.log('Plug in yo phone!');
  // } else {
  //   console.log('No need to charge!');
  // }

// combining if/else statements with else if statements
 
  // var moonPhase = "full";

  // if (moonPhase === "full") {
  //   console.log('Howl!');
  // } else if (moonPhase === "mostly full") {
  //   console.log('Arms and legs are getting hairier.');
  // } else if (moonPhase === "mostly new") {
  //   console.log('Back on two feet.');
  // } else {
  //   console.log('Invalid moon phase.');
  // }

// logical operators && and ||
  
  // var moonPhase = "full";
  // var isFoggyNight = true;

  //  if (moonPhase === "full" && isFoggyNight == true) {
  //     console.log('Howl!');
  //   } else if (moonPhase === "mostly full") {
  //     console.log('Arms and legs are getting hairier.');
  //   } else if (moonPhase === "mostly new") {
  //     console.log('Back on two feet.');
  //   } else {
  //     console.log('Invalid moon phase.');
  //   }

// switch statements
// like else if statements, but with switch you can have way many more conditions in more concise and readable code to others
  // var moonPhase = "full";

  // switch (moonPhase) {
  //   case "full":
  //     console.log('Howl!'); break;
  //   case "mostly full":
  //   console.log('Arms and legs are getting hairier.'); break;
  //   case "mostly new":
  //   console.log('Back on two feet.'); break;
  //   default:
  //   console.log('Invalid moon phase.'); break;
  // }


  // var array = ["one","two"]

  // for(var i = 0; i < array.length; i++){

  //   var outPutString = " "

  //   for(var x= 0, x <= 7; x++){
  //     outPUtstring += array[i] + " ";
  //   }

  //   console.log(outPutString);
  // }

