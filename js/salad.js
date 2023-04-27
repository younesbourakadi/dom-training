
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];
const ingredientsList = document.getElementById("salad-ingredients");
const saladCount = document.getElementById("salad-count");
const saladList = document.getElementById("salad-final");



let saladIngredients = [];
function addIngredient(ingredient) {
  if (saladIngredients.length >= 5) {
    alert("Vous avez atteint la limite de 5 ingrédients !");
    return;
  }
  saladIngredients.push(ingredient);
  updateSaladList();
  saladCount.textContent = saladIngredients.length;
  const ingredientButton = findIngredientButton(ingredient);
  ingredientButton.disabled = true;
}

function removeIngredient(ingredient) {
  saladIngredients.splice(saladIngredients.indexOf(ingredient), 1);
  updateSaladList();
  saladCount.textContent = saladIngredients.length;
  const ingredientButton = findIngredientButton(ingredient);
  ingredientButton.disabled = false;
}

function findIngredientButton(ingredient) {
  const buttons = ingredientsList.getElementsByTagName("button");
  for (let button of buttons) {
    if (button.textContent === ingredient) {
      return button;
    }
  }
  return null;
}

function updateSaladList() {
  saladList.innerHTML = "";
  for (let ingredient of saladIngredients) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = ingredient;
    button.classList.add("button");
    button.addEventListener("click", function() {
      removeIngredient(button.textContent);
    });
    li.appendChild(button);
    saladList.appendChild(li);
  }
}

for (let ingredient of ingredients) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = ingredient;
  button.classList.add("button");
  button.addEventListener("click", function() {
    addIngredient(button.textContent);
  });
  li.appendChild(button);
  ingredientsList.appendChild(li);
}
