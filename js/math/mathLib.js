// Math Library 
// Math Properties and Methods 

// Eular's Number - Math.E 
const eular = Math.E;
console.log(eular);

// Pi - Math.PI
const pi = Math.PI;
console.log(pi);


// Math Methods

// Absolute Value - Math.abs() 
const a = 6, b = -13;

console.log(`Absolute value of ${a} is ${Math.abs(a)}`);
console.log(`Absolute value of ${b} is ${Math.abs(b)}`);


// Floor (Rounding Down) - Math.floor()
const decimal = 24.936;
const floor = Math.floor(decimal);
console.log(`The value of floor is ${floor}.`);


// Ceil (Rounding Up) - Math.ceil()
console.log("The value of ceil is " + Math.ceil(decimal) + ".");


// Round (Rounding to Nearest) - Math.round()
console.log("The value of round is " + Math.round(decimal) + ".");


// Logarithm - Math.log()
const log = Math.log(2);
console.log(`The value of log is ${log}.`);


// Maximum - Math.max()
const number = Math.max(10,50,30,90,40)


// Minimum - Math.min()
const minimum = Math.min(120, 190, 348, 200);
console.log("The value of minimum is " + minimum + ".");


// Power = Math.pow()
let power = Math.pow(3, 2);
// first value is base and second values is exponent 
console.log(`The value of power is ${power}.`);


// Random Number - Math.random()
const random = Math.random();
console.log("The value of random is " + random);


function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomBetween5to50 = randomBetween(5, 50);

console.log("The value of random is " + randomBetween5to50);



// Round - Math.round()
const round = Math.round(2.6);
console.log("The value of round is " + round + ".");


// Square Root - Math.sqrt()
const sqrt = Math.sqrt(23);
console.log("The value of sqrt is " + sqrt + ".");
