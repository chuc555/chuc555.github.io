$(document).ready(function() {
  
// HELLO WORLD PAGE
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


//HIDDEN PATTERN PAGE
let starArray = ['*_*_*_*_*_*_*_*_*_*','*_*_*_*_*_*_*_*','*_*_*_*_*_*','*_*_*_*','*_*'];

for (let starArrayIndex = 0; starArrayIndex < starArray.length; starArrayIndex++) {
  for (let starArrayIndex = 1; starArrayIndex < starArray.length; starArrayIndex++) {
  console.log(starArray[starArrayIndex]);
    for (let starArrayIndex = 2; starArrayIndex < starArray.length; starArrayIndex++) {
      console.log(starArray[starArrayIndex] + ' @@@@@');
      for (let starArrayIndex = 3; starArrayIndex < starArray.length; starArrayIndex++) {
        console.log(starArray[starArrayIndex] + ' ^&^&^&^')
      }
    }
  }
}

//going backwards
// for (let starArrayIndex = starArray.length - 1; starArrayIndex >=0; starArrayIndex--) {
//   console.log(starArray[starArrayIndex]);
// }









});

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

