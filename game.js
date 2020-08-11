console.log("working");

//create pattern

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

// var randomColor = nextSequence();
var randomColor;

var wrongSound = new Audio("sounds/wrong.mp3");

var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * buttonColours.length);

  randomColor = buttonColours[randomNumber];
  gamePattern.push(randomColor);
  userPattern = gamePattern;
  // var randomChosenColour = buttonColours[randomNumber];
  //      console.log(randomChosenColour);

//   gamePattern.push(randomChosenColour);
//        console.log(gamePattern);
}

//keyboard press

// $( "#body").keypress(function(){
//     console.log("Key pressed.");
//     // console.log(nextSequence());
//     randomColor = nextSequence();
//     console.log(randomColor);
//     // console.log(color + " button pressed.");
//     $("#" + randomColor).fadeOut(150).fadeIn(150);

//     var sound = new Audio();
//     sound.src = "sounds/" + randomColor + ".mp3";
//     sound.play();
// });

//button clicks

$(".start").click(function () {
  $(".start").css("visibility", "hidden");
  console.log("Start pressed.");
  nextSequence();
  console.log(gamePattern);
  $("#" + gamePattern)
    .fadeOut(150)
    .fadeIn(150);

  var sound = new Audio("sounds/" + randomColor + ".mp3");
  sound.play();

  $("#level-title").html(`Level ${level}`);
});

$("#yellow").click(function () {
  console.log("Yellow button pressed.");
  $("#yellow").fadeOut(150).fadeIn(150);

  console.log(randomColor);

  if (randomColor == "yellow") {
    console.log("Correct colour.");
    var yellowSound = new Audio("sounds/yellow.mp3");
    yellowSound.play();
    level++;
    $("#level-title").html("Level " + level);
  } else {
    wrongSound.play();
    $(".start").css("visibility", "visible");
    $("#level-title").html("Press Start to try again");
    level = 0;
  }
});

$("#red").click(function () {
  console.log("Red button pressed.");
  $("#red").fadeOut(150).fadeIn(150);

  console.log(randomColor);

  if (randomColor == "red") {
    console.log("Correct colour.");
    var redSound = new Audio("sounds/red.mp3");
    redSound.play();
    level++;
    $("#level-title").html("Level " + level);
  } else {
    wrongSound.play();
    $(".start").css("visibility", "visible");
    $("#level-title").html("Press Start to try again");
    level = 0;
  }
});

$("#green").click(function () {
  console.log("Green button pressed.");
  $("#green").fadeOut(150).fadeIn(150);

  console.log(randomColor);

  if (randomColor == "green") {
    console.log("Correct colour.");
    var greenSound = new Audio("sounds/green.mp3");
    greenSound.play();
    level++;
    $("#level-title").html("Level " + level);
  } else {
    wrongSound.play();
    $(".start").css("visibility", "visible");
    $("#level-title").html("Press Start to try again");
    level = 0;
  }
});

$("#blue").click(function () {
  console.log("Blue button pressed.");
  $("#blue").fadeOut(150).fadeIn(150);

  console.log(randomColor);

  if (randomColor == "blue") {
    console.log("Correct colour.");
    var blueSound = new Audio("sounds/blue.mp3");
    blueSound.play();
    level++;
    $("#level-title").html("Level " + level);
  } else {
    wrongSound.play();
    $(".start").css("visibility", "visible");
    $("#level-title").html("Press Start to try again");
    level = 0;
  }
});
