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
button_four.addEventListener("mouseover", function() {
    // Add hover style
    button_four.style.backgroundColor = "#23c483";
    button_four.style.boxShadow = "0px 15px 20px rgba(46, 229, 157, 0.4)";
    button_four.style.color = "#fff";
    button_four.style.transform = "translateY(-7px)";
});

button_four.addEventListener("mouseout", function() {
    // Remove hover style
    button_four.style.backgroundColor = "";  // Reset to default
    button_four.style.boxShadow = "";  // Reset to default
    button_four.style.color = "";  // Reset to default
    button_four.style.transform = "";  // Reset to default
});

button_four.addEventListener("mousedown", function() {
    // Add active style
    button_four.style.transform = "translateY(-1px)";
});

button_four.addEventListener("mouseup", function() {
    // Remove active style
    button_four.style.transform = "";  // Reset to default
});
button_four.style.cssText = 'padding: 1.3em 3em;font-size: 12px;text-transform: uppercase;letter-spacing: 2.5px;font-weight: 500;color: #000;background-color: #fff;border: none;border-radius: 45px;box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);transition: all 0.3s ease 0s;cursor: pointer;outline: none;'
button_four.addEventListener('click', () => {
    card.style.cssText  = 'background-color: #23c483;box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4); width: 400px; height: 400px; padding: 10px 20px; border-radius: 45px;';
    cardTitle.textContent = 'Welcome Abtal Tech';
    cardTitle.style.cssText = 'color: white'
})
