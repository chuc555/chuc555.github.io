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


var pattern1 = ["▥▩▩▩▩▩▩▩▩▩▥ ","","▩▩▩▥▩▩▩▥▩▩▩ ","▥▩▥▩▥▩▥▩▥▩ ","▩▩▩▥▩▩▩▥▩▩▩ "];
var pattern2 = ["▩▩▩▩▩▩▩▩▩▩ ","▤▤▤▤▤▤▤▤▤▤ ","▧▧▧▧▧▧▧▧▧▧ ","▨▨▨▨▨▨▨▨▨▨ "];

var pattern3 = ["☱☲☱☲☱☲☱☲","☱☲☱☲☱☲☱☲","☱☲☱☲☱☲☱☲","☱☲☱☲☱☲☱☲","☱☲☱☲☱☲☱☲"]
var pattern4 = ["☰☷☰☷☰☷☰☷","☰☷☰☷☰☷☰☷","☰☷☰☷☰☷☰☷","☰☷☰☷☰☷☰☷","☰☷☰☷☰☷☰☷",]

var pattern5 = ["▩▩▩▩▩▩▤▤▤▤▤▤ ","▩▩▩▩▩▩▤▤▤▤▤▤ ","▩▩▩▩▩▩▤▤▤▤▤▤ ","▩▩▩▩▩▩▤▤▤▤▤▤ "]
var pattern6 = ["░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓","░░░░░░░░▓▓▓▓▓▓▓▓"]

var pattern7 = ["▤▤▤▤▤▤▤▤▤▩▩▩▩▩▩▩▩▩","▤▤▤▤▤▤▤▤▤▩▩▩▩▩▩▩▩▩","▤▤▤▤▤▤▤▤▤▩▩▩▩▩▩▩▩▩","▤▤▤▤▤▤▤▤▤▩▩▩▩▩▩▩▩▩","▤▤▤▤▤▤▤▤▤▩▩▩▩▩▩▩▩▩"]
var pattern8 = ["▩▩▩▩▩▩▩▩▩▤▤▤▤▤▤▤▤▤","▩▩▩▩▩▩▩▩▩▤▤▤▤▤▤▤▤▤","▩▩▩▩▩▩▩▩▩▤▤▤▤▤▤▤▤▤","▩▩▩▩▩▩▩▩▩▤▤▤▤▤▤▤▤▤","▩▩▩▩▩▩▩▩▩▤▤▤▤▤▤▤▤▤"]

  
var timer = 0;
var timer2 = 1000;
var timer3 = 1500;
var timer4 = 2000;
var timer5 = 2500;

// // patterns 1 and 2
// // for (var m = 0; m < 8; m++) {
// // setTimeout(function(){
  
//   for (var i = 0; i < 3; i++) {
//     var outPutString1 = " "
//       for (var x = 0; x <= 6; x++){
//       outPutString1 += pattern1[i];
//       }
//     console.log(outPutString1);
//    }

//   for (var h = 0; h < 3; h++) {
//     var outPutString2 = " "
//       for (var j = 0; j <= 6; j++){
//       outPutString2 += pattern2[h];
//       }
//     console.log(outPutString2);
//    }   
// // },timer)
// // timer += 100;
// // }

// patterns 3 and 4
// for (var b = 0; b < 8; b++) {
// setTimeout(function(){
  
    for (var k = 0; k < 3; k++) {
    var outPutString3 = " "
      for (var n = 0; n <=6; n++){
        outPutString3 += pattern3[k];
      }
    console.log(outPutString3);  
  }
  
  for (var l = 0; l<3; l++) {
    var outPutString4 = " "
    for (var a = 0; a <= 6; a++){
      outPutString4 += pattern4[l];
    }
    console.log(outPutString4);
  }  
// }, timer2)
// timer2 += 100;
// }  

// patterns 5 and 6
// for (var g = 0; g < 8; g++) {
// setTimeout(function(){
  
    for (var p= 0; p < 3; p++) {
    var outPutString5 = " "
      for (var r = 0; r <=6; r++){
        outPutString5 += pattern5[p];
      }
    console.log(outPutString5);  
  }
  
  for (var l = 0; l<3; l++) {
    var outPutString6 = " "
    for (var a = 0; a <= 6; a++){
      outPutString6 += pattern6[l];
    }
    console.log(outPutString6);
  }  
// }, timer3)
// timer3 += 100;
// }  

// patterns 7 and 8
// for (var q = 0; q < 8; q++) {
// setTimeout(function(){
  
    for (var f= 0; f < 3; f++) {
    var outPutString7 = " "
      for (var o = 0; o <=6; o++){
        outPutString7 += pattern7[f];
      }
    console.log(outPutString7);  
  }
  
  for (var s = 0; s<3; s++) {
    var outPutString8 = " "
    for (var t = 0; t <= 6; t++){
      outPutString8 += pattern8[s];
    }
    console.log(outPutString8);
  }  
// }, timer4)
// timer4 += 100;
// } 


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

