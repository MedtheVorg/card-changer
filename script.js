const container = document.querySelector(".container");
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card h1");
const cardContent = document.querySelector(".card .content");


// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the button with class "btn-3"
    var btn3 = document.getElementById("btn3");
  
    // Add a click event listener to the button
    btn3.addEventListener("click", function () {
      // Your logic for button with class "btn-3" goes here
      alert("Button 3 clicked!"); // Example: Display an alert
  
      // You can also modify the content of the card or perform other actions
      var cardContent = document.querySelector(".content");
      cardContent.textContent = "Button 3 clicked!";
    });
  });
  

// buttons
const button_one = document.querySelectorAll(".controllers .btn")[0];
const button_two = document.querySelectorAll(".controllers .btn")[1];
const button_three = document.querySelectorAll(".controllers .btn")[2];
const button_four = document.querySelectorAll(".controllers .btn")[3];
const button_five = document.querySelectorAll(".controllers .btn")[4];

// template first button Code

// write yout button event listener here
// you are free to change the card design as you like
// ------------------------------
