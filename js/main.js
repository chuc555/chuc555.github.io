$(document).ready(function() {
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

  

var simpleArray = [1,2,3,4,5,6,7,8,9,10]


for (var i = 0; i < simpleArray.length; i++){

    if(simpleArray[i] % 2 == 0){

        console.log("even: " + simpleArray[i])

    } else{

        console.log("odd: " + simpleArray[i])

    }   
}


});
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

