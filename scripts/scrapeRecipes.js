// Write browser JS that will get the title of a recipe - the h1,
// the ingredients (all the list items in an unordered list)
// and the directions (all the list items in an ordered list)

// Use the browser console to test your code

const title = document.querySelector("h1").innerText;
const ingredients = document.querySelectorAll("ul li");
const directions = document.querySelectorAll("ol li");
const url = window.location.href;
const uid = "JMe2HfuzV1hlfcSznUPKhPBMswk1";

// Spit out the JSON to the console
console.log(JSON.stringify({ title, ingredients, directions, url, uid }));
