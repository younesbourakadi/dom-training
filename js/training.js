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
window.addEventListener('scroll', function(event) {
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
colorizeBtn.addEventListener('click', function(event){
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


/* ------------------------------------ */
/* --- Exercice 8 --- */
