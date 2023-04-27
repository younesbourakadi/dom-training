/* ------------------------------------ */
/* --- Exercice 1 --- */
const btnToggle = document.getElementById('btn-toggle'); 
const paragraphToggle = document.getElementById('paragraph-toggle');
btnToggle.addEventListener('click', function(){
  if (paragraphToggle.style.display !== "none"){
    paragraphToggle.style.display = "none";
  } else {
    paragraphToggle.style.display = "block";
  }
})

/* ------------------------------------ */
/* --- Exercice 2 --- */
const scrollValue = document.getElementById('ex2-scroll-value');
window.addEventListener('scroll', function() {
  scrollValue.innerHTML = Math.round(window.scrollY);
})

/* ------------------------------------ */
/* --- Exercice 3 --- */
const rearrangeBtn = document.getElementById('rearrange-btn');
const ex3Animals = document.getElementById('ex3-animals');

rearrangeBtn.addEventListener('click', function(){
  ex3Animals.appendChild(ex3Animals.firstElementChild)
})


/* ------------------------------------ */
/* --- Exercice 4 --- */
const colorizeBtn = document.getElementById('colorize-btn'); 
const colors = ['blue','red','green', 'pink', 'yellow']
let counter = 0;
colorizeBtn.addEventListener('click', function(){
  colorizeBtn.style.background = colors[counter%colors.length]
  counter++;
})
/* ------------------------------------ */
/* --- Exercice 5 --- */

const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
  button.addEventListener('mouseover', function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = '#' + randomColor;
  });
});
/* ------------------------------------ */
/* --- Exercice 6 --- */
const paragraph = document.getElementById("ex6-paragraph");
let index = 0;
const text = paragraph.innerHTML;

function printParargaph() {
  if (index < text.length) {
    paragraph.innerHTML += text.charAt(index);
    index++;
    setTimeout(printParargaph, 50);
  }
}

paragraph.innerText = "";
printParargaph();


/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
  "🥖 Acheter du pain",
  "🗑️ Descendre la poubelle",
  "🐶 Sortir le chien",
  "🍽️ Faire la vaisselle",
  "🧹 Passer l'aspirateur",
  "🌳 Tondre la pelouse"
];

const button = document.getElementById("ex7-button");
const todos = document.getElementById("ex7-list");
let todoCounter = 0;

button.addEventListener("click", function(){
  if (todoCounter < taskList.length) {
    const todo = document.createElement("li");
    todo.innerHTML= taskList[todoCounter];
    todo.classList.add("todo");
    todos.appendChild(todo);
    todoCounter++;
  }
});

todos.addEventListener("click", function(event){
  if (event.target.classList.contains("todo")) {
    event.target.remove();
    todoCounter--;
  }
});

/* ------------------------------------ */
/* --- Exercice 8 --- */
const levelButton = document.getElementById("ex8-button-level");
const levelBar = document.getElementById("ex8-level");
const strengthButton = document.getElementById("ex8-button-strength");
const strengthBar = document.getElementById("ex8-strength");
const shieldButton = document.getElementById("ex8-button-shield");
const shieldBar = document.getElementById("ex8-shield");

let levelCounter = 0;
let strengthCounter = 0;
let shieldCounter = 0;

function updateCounterAndBar(counter, bar) {
  counter += 5;
  if (counter > 100) {
    counter = 100;
  }
  bar.style.width = `${counter}%`;
  return counter;
}

levelButton.addEventListener("click", function () {
  levelCounter = updateCounterAndBar(levelCounter, levelBar);
});

strengthButton.addEventListener("click", function () {
  strengthCounter = updateCounterAndBar(strengthCounter, strengthBar);
});

shieldButton.addEventListener("click", function () {
  shieldCounter = updateCounterAndBar(shieldCounter, shieldBar);
});
