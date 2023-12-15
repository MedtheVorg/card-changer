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

button_four.addEventListener('click', () => {
    card.style.cssText  = 'background-color: #23c483;box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4); width: 400px; height: 400px; padding: 10px 20px; border-radius: 45px;';
    cardTitle.textContent = 'Welcome Abtal Tech';
    cardTitle.style.cssText = 'color: white'
})
