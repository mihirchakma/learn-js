//* if else conditions

let candy = 90;

if (candy >= 100) {
    console.log("You got a cavity!");
} else {
    console.log("You didn't get a cavity! Well done!");
}


//* if, else if, else conditions 
const candies = 80;

if (candies >= 100) {
    console.log("You got a cavity!");
} else if (candies >= 95) {
    console.log("You almost got a cavity. Be careful!");
} else if (candies >= 75) {
    console.log("You should eat less candy!");
} else {
    console.log("You didn't get a cavity! Nice!");
}


//* Terinary operator
// The ternary operator is a shorthand way to represent a conditional 
// that returns a value that you can then use to assign to a variable. 

//* Syntax: condition ? expression1 : expression2; 

// If the condition evaluates to true, the ternary operator returns the value of expression1.
// If the condition evaluates to false, the ternary operator returns the value of expression2.

const number = 25;

const result = number > 20 ? "The number is greater than 20" : "The number is less than or equal to 20";
console.log(result); // The number is greater than 20 

let number1 = 100;

const isEven = number1 % 2 === 0 ? "Yes" : "No";
console.log("Is " + number + " an even number? " + isEven); 

// The ternary operator is a great way to write simple if/else statements in a single line.

