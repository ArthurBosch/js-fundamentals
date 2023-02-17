const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

//for-loop
console.log("--------------------------------");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//while
console.log("--------------------------------");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

//backwards
console.log("--------------------------------");
let x = ingredients.length - 1;
while (x >= 0) {
  console.log(ingredients[x]);
  x -= 1;
}
