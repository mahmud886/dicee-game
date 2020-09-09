// For player 1:

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceImages = "dice" + randomNumber1 + ".png";
const randomImagesSources = "images/" + randomDiceImages;

const images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src", randomImagesSources);

// For player 2:
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

const images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src", randomImagesSource2);

// Win

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
	document.querySelector("h1").innerHTML = "Draw!";
}
