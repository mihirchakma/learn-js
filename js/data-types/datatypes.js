// Primitive Data Types 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol


// 1. Number
const cars = 10;
const bikes = 20;

console.log("There are " + cars + " Cars, and " + bikes + " Bikes.");


// 2. String
const firstName = "Mihir";
const lastName = "Chakma";

console.log(firstName + " " + lastName);

let city = "Colombo";
console.log(city);

// Template Literals with String
console.log(`Look How
    cool this string is.
    It is multiline string`);

// String Interpolation with Template Literals 
const resturant = "KFC";
const food = "Chicken";
const price = 10;

console.log(`I went to ${resturant} and ordered ${food} for ${price} dollars.`);
console.log(`My name is ${firstName} ${lastName}`);

// ToLowerCase() function
const place = "LOS ANGELES - USA";
console.log(place.toLowerCase());

// ToUpperCase() function 
console.log(place.toUpperCase());

// repeat() function
const phrase = "time and ";
const sentance = "I dominate in PUBG " + phrase.repeat(3) + "time again.";
console.log(sentance);

// replace() function
const replaceWord = "The house is red.";
console.log(replaceWord);

// replaing red with blue color 
const newWord = replaceWord.replace("red", "blue");
console.log(newWord);

// includes() function method 
const sentance1 = "I like you.";

console.log(sentance1.includes("like"));
console.log(sentance1.includes("love")); // false


// 3. Boolean
const pizzaIsGood = true;
const pizzaIsBad = false;
const wholeFoodIsCheap = false;

console.log(pizzaIsGood);
console.log(pizzaIsBad);
console.log(wholeFoodIsCheap);


// 4. Undefined
let apple;
console.log(apple); // undefined 

// undefined means a variable has been declared 
// but has not yet been assigned a value 


// 5. Null
const pears = null;
console.log(pears); // null

// null and undefined are not same
// Null means nothing, empty or value unknown 


// 6. Symbol 

// Symbols are new primitive type introduced in ES6
// They are unique and immutable
// They are used to create unique identifiers for objects
// They are created using Symbol() function

const SIZE_XSMALL = Symbol();
const SIZE_SMALL = Symbol();
const SIZE_MEDIUM = Symbol();
const SIZE_LARGE = Symbol();
const SIZE_XLARGE = Symbol();

// console.log(SIZE_XSMALL);

function getShirtsLeftInSize(size) {
    if(size === SIZE_XSMALL) {
        return 4;
    } else if(size === SIZE_SMALL) {
        return 6;
    } else if(size === SIZE_MEDIUM) {
        return 3;
    } else if(size === SIZE_LARGE) {
        return 7;
    } else if(size === SIZE_XLARGE) {
        return 12;
    }  
}

const mySize = SIZE_SMALL;
console.log("There are " + getShirtsLeftInSize(mySize) + " shirts left in my size.");

// Symbols can be used as keys for object properties
// Symbols are ignored by for...in loops
// Symbols are ignored by JSON.stringify()
// Symbols can be used to define object constants


