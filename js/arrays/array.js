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

