// Dates in JS 

// Creating a Date Object
const date = new Date();
console.log(date);

// Getters and Setters for Date 
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

console.log("===================================="); // break 

// Setters
console.log(date.setDate(17));
console.log(date.setMonth(11));
console.log(date.setFullYear(1997));
console.log(date.setHours(12));
console.log(date.setMinutes(12));
console.log(date.setSeconds(12));
console.log(date.setMilliseconds(12));
console.log(date.setTime(12));

console.log("===================================="); // break

// Time between two dates
const date1 = new Date("07/17/1997");
const date2 = new Date();
let timeDiff = date2.getTime() - date1.getTime() / (1000 * 3600 * 24 * 365);
console.log(timeDiff);


const today = new Date();
console.log(today);


// Formatting Dates
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString());
console.log(today.toUTCString());
console.log(today.toISOString());


// Date Comparisons
const date3 = new Date("07/17/1997");
const date4 = new Date("07/17/2000");

if (date3.getTime() === date4.getTime()) {
    console.log("Dates are equal");
} else {
    console.log("Dates are not equal");
}
