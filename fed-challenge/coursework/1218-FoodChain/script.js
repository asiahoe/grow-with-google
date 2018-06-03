var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore": "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);

/* If Else Solution
Notice it matches the structure of the ternary solution exactly.

if (eatsPlants && eatsAnimals) {
  console.log("omnivore");
} else if (eatsPlants && !eatsAnimals) {
  console.log("herbivore");
} else if (!eatsPlants && eatsAnimals) {
  console.log("carnivore");
} else {
  console.log(undefined);
}
*/
