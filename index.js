function playSound(theLetter) {

  console.log("Hi! This is the playsound function, the letter is: " + theLetter);

  //what letter was clicked or pressed?
  switch (theLetter) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }

} //end of playSound();

var i;
var letter;
var array = document.querySelectorAll(".drum");

//loop through each .drum element
for (i = 0; i < array.length; i++) {

  //add an event listener to each .drum element
  array[i].addEventListener("click", function() {

    //get the text from inside the element (which is the letter)
    letter = this.innerHTML;
    playSound(letter);
    buttonAnimation(letter);
  }); //click end

} //loop end


//listen for all keydown events on the page
document.addEventListener("keydown", function(event) {
  //which key was pressed?
  letter = event.key;
  playSound(letter);
  buttonAnimation(letter);
});

//create a function that will animate a button once pressed or when the corresponding key is pressed.
function buttonAnimation(letter){
  var activeButton = document.querySelector("." + letter);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
};
