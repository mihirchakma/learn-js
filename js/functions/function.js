// create a function 
function intro() {
    console.log("This is a function!");
}

// arrow function 
const introduction = () => {
    console.log("Hello, my name is JavaScript.");
}


// a function with parameters 
function myIntroduction(greeting, name) {
    console.log(`${greeting}, my name is ${name}.`);
}


// calling functions 
intro();
introduction();
myIntroduction("Hi", "Luffy");


// Return Values in function 
function getAreaOfCircle(radius) {
    return radius * radius * Math.PI;
}

const radius = 3;
const area = getAreaOfCircle(radius);
console.log(`A circle with a radius of ${radius} has an area of ${area}.`);


