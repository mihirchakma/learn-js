// Timeouts and Intervals

// setTimeout
function sayHello() {
    console.log("Hello");
}

const timeout = setTimeout(sayHello, 5 * 1000);

// clearTimeout
clearTimeout(timeout);


// setInterval
let seconds = 0;

function printTime() {
    seconds++; // increment seconds by 1
    console.log(`Seconds elapsed: ${seconds}`);

    // if seconds is equal to 10, stop the interval
    if (seconds === 10) {
        console.log("10 seconds has elapsed!");
        clearInterval(interval); // clearInterval stops the interval
    }
}

const interval = setInterval(printTime, 1000);

