// var randomNumber1 = Math.floor(Math.random()*6)+1;
// if (randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
// } else if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
// } else if (randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
// } else if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
// } else if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
// } else {
//     document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
// }

// var randomNumber2 = Math.floor(Math.random()*6)+1;
// if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
// } else if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
// } else if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
// } else if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
// } else if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
// } else {
//     document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
// }

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").textContent ="Player 1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").textContent ="Player 2 Wins!";
// } else {
//     document.querySelector("h1").textContent ="Draw!";
// }

// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
// var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// var randomNumber2 = Math.floor(Math.random()*6) + 1;
// var randomImage2 = "/dice" + randomNumber2 + ".png";
// var randomImageSource2 = "./images" + randomImage2;
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

// var heading = document.querySelector("h1");

// if (randomNumber1 > randomNumber2) {
//     heading.textContent = "Player 1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//     heading.textContent = "Player 2 Wins!";
// } else {
//     heading.textContent = "Draw!";
// }


var randomNumber1 = Math.floor(Math.random()*6) + 1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", "./images" + "/dice" + randomNumber2 + ".png");

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins!";
} else {
    heading.textContent = "Draw!";
}