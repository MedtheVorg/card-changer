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

//  first button Code

button_one.addEventListener("click", start);

function start() {
  button_one.textContent = "button";
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  document.body.style.backgroundPosition = "center center";

  container.style.padding = "2rem";
  container.style.backgroundColor = "#fff";
  container.style.backgroundColor = "#fff";
  container.style.borderRadius = "10px";
  container.style.maxWidth = "500px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";

  cardTitle.style.textTransform = "uppercase";

  cardContent.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, odit reiciendis tenetur, quaerat maxime ullam cupiditate adipisci dolorem accusamus alias debitis. Magnam natus modi omnis rem obcaecati. Sed, temporibus distinctio!";
  cardContent.style.marginTop = "2rem";
  cardContent.style.marginBottom = "4rem";

  document.querySelectorAll(".controllers .btn").forEach((button, index) => {
    button.textContent = `button-${index + 1}`;
    button.style.padding = "20px 20px";
    button.style.marginRight = "5px";
    button.style.border = "1px solid #333";
    button.style.border = "1px solid #333";
    button.style.pointer = "cursor";
  });
}

// ------------------------------
<<<<<<< HEAD
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

