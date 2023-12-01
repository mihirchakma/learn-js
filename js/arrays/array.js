// Creating an array 
const drinks = ["Water", "Juice", "Milk", "Soda"];

// Retrieval 
console.log(drinks[0]);

for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

// document.getElementById("drinks").innerHTML = drinks;

// forEach method and arrow functions 
drinks.forEach((drink) => console.log(drink));


// Reassignment 
drinks[2] = "Coffee"; // change Milk to Coffee 

console.log(drinks);


// Sort arrays
const sortedDrinks = drinks.sort();

console.log(drinks);


// sort an array of numbers numerically 
const numbers = [31, 99, 2, 6, 27, 64];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);


// Push - push() 
const drinks_1 = ["water", "juice", "milk", "soda"];

drinks_1.push("Tea"); // add "tea" to the end of this array 

console.log(drinks_1);


// Pop - pop() 
drinks_1.pop(); // remove the last item in this array 

console.log(drinks_1);


// Shift - shift() 
const chocolates = ["Snickers", "Kit-Kat", "Twix"];

const snack = chocolates.shift();

console.log(snack);
console.log(chocolates);


// Unshift - unshift() 
const chocolates_1 = ["Snickers", "Kit-Kat", "Twix"];

const newLength = chocolates_1.unshift("Milky Way", "3 Musketeers");

console.log(newLength);
console.log(chocolates_1);


// Concat - concat() 
const healthyDrinks = ["water", "milk"];
const unhealthyDrinks = ["juice", "soda"];

// concatenating two existing arrays 
const allDrinks = healthyDrinks.concat(unhealthyDrinks);

console.log(allDrinks);


// Slice - slice() 
const colors = ["red", "green", "blue", "white", "purple"];

const slice = colors.slice(1, 4);
console.log(slice);

// If you only provide one parameter, 
// it will use that number as the starting point, 
// and copy the rest of the array
const slice_1 = colors.slice(3);
console.log(slice_1);

const slice_2 = colors.slice(-3);
console.log(slice_2);


// Splice - splice()
const foods = ["burger", "pizza", "donut", "bread", "pasta"];

foods.splice(2);
console.log(foods);

const foods_1 = ["burger", "pizza", "donut", "bread", "pasta"];

foods_1.splice(2, 1);
console.log(foods_1);


// Split - split()
const string = "peanut,butter,jelly,time";
const array = string.split(",");

console.log(array);

