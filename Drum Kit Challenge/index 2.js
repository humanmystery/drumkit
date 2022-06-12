// document.querySelector("button").addEventListener("click", function(){
//   alert("I got clicked")}); //calling first button, click that happens to the button and runs the function
// //passing a function as an input



// function handleClicks() {
//   alert("I got clicked");
// }


// detect button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
       
        }

    )}

// detect keyboard press
document.addEventListener("keydown", function(event) {
    this.eventKey = event.key;
    var clickedButton = this.eventKey;
    makeSound(clickedButton);
    buttonAnimation(clickedButton);


    })



// switched based on event key parameter
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; // exit switch statement and continue with the rest of the code

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML); //else statement - other scenarios that were not mentioned

}};

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
}