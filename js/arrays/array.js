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


// push - push() 
const drinks1 = ["water", "juice", "milk", "soda"];

drinks1.push("Tea"); // add "tea" to the end of this array 

console.log(drinks1);


// pop - pop() 
drinks1.pop(); // remove the last item in this array 

console.log(drinks1);


// shift - shift() 
const chocolates = ["Snickers", "Kit-Kat", "Twix"];

const snack = chocolates.shift();

console.log(snack);
console.log(chocolates);


// unshift - unshift() 
const chocolates_1 = ["Snickers", "Kit-Kat", "Twix"];

const newLength = chocolates_1.unshift("Milky Way", "3 Musketeers");

console.log(newLength);
console.log(chocolates_1);

