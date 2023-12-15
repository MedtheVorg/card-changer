const container = document.querySelector(".container");
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card h1");
const cardContent = document.querySelector(".card .content");

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

// ABDO CHANGES BUTTON 5
function changeColor(){
    card.style.height = '200px'
    card.style.width = '500px'
    card.style.backgroundColor = 'black'
    card.style.dislay = 'flex'
    card.style.textAlign = 'center'
    cardTitle.style.color = 'White'
    cardTitle.innerHTML = `Modifications`
}
