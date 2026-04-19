/* access the first element in the array and store in another variable*/

/* let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
 
console.log(firstTea); */

// arr cities, access the third element

/* let cities = ["London", "Paris", "Tokyo", "New York"];

const favouriteCity = cities[2];

console.log(favouriteCity); */

// changing second element of array to jasamine tea

/* let teaTypes = ["Herbal Tea", "White Tea", "Masala Tea"];
teaTypes[1] = "Jasmine Tea";

console.log(teaTypes); */

// adding elements to the array

/* let citiesVisited = ["Mumbai", "Sydney"];

// citiesVisited[citiesVisited.length] = "Berlin";

citiesVisited.push("Berlin");

console.log(citiesVisited); */

// pop the last array item

/* let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey", "Milk Tea"];
let lastOrder = teaOrders.pop();
console.log(lastOrder); */

//create a soft copy of an array

/* let popularTeas = ["Green Tea", "Oolong Tea", "Chai"];
let softCopy = popularTeas;
popularTeas.push("berlin");
popularTeas = ["Green Tea", "Oolong Tea"];
console.log(softCopy);
console.log(popularTeas); */

// make a hard copy of array

/* let topCities = ["Tokyo", "Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);
 */

// merging two arrays

/* let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// const worldCities = europeanCities + "," + asianCities;
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities); */

// find the array length and store in another  variable

/* let teaMenu = ["Masala Tea", "Oolang Tea", "Green Tea", "Milk Tea"];
menuLength = teaMenu.length;

console.log(menuLength); */

/* let cityBucketList = ["Kyoto", "Akihabara", "Shibuya", "Tokyo", "Harajuku"];

const isTokyoInArr = cityBucketList.includes("Tokyo");
console.log(isTokyoInArr);
 */
