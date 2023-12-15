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
    button.style.padding = "10px 20px";
    button.style.marginRight = "5px";
    button.style.border = "1px solid #333";
    button.style.border = "1px solid #333";
    button.style.pointer = "cursor";
  });
}

// ------------------------------
