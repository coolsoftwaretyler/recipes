// Write browser JS that will get the title of a recipe - the h1,
// the ingredients (all the list items in an unordered list)
// and the directions (all the list items in an ordered list)

// Use the browser console to test your code

const title = document.querySelector("h1").innerText;
const ingredients = document.querySelectorAll("ul li");
const directions = document.querySelectorAll("ol li");
const url = window.location.href;
const uid = "JMe2HfuzV1hlfcSznUPKhPBMswk1";

// Map the ingredients to just the innertext of each item, use the right method for DomNOD
let ingredientStrings = [];
for (let i = 0; i < ingredients.length; i++) {
  ingredientStrings[i] = ingredients[i].innerText;
}

// Map the directions to just the innertext of each item, use the right method for DomNOD
const directionSTrings = [];
for (let i = 0; i < directions.length; i++) {
  directionSTrings[i] = directions[i].innerText;
}

const recipe = {
  title,
  ingredients: ingredientStrings,
  directions: directionSTrings,
  url,
  uid,
};

// Spit out the JSON to the console
console.log(JSON.stringify(recipe));
