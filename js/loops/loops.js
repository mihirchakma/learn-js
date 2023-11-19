
//* for loop 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//* while loop 
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


//* do while loop 
let doritos = 100;

do {
    console.log("With " + doritos + " Doritos left, I can eat.");
    doritos -= 20 // doritos = doritos - 20 
} while (doritos > 0);

console.log("My doritos are gone now. I am sad.😔");


//* for in loop 
let colors = ["red", "green", "blue", "white", "black"];

for (let i in colors) {
    console.log(colors[i]);
}

// for in loop iterating over the properties of an object 
let person = {
    name: "Mihir",
    weight: "150",
    age: 25
};

for (let property in person) {
    console.log(`This person's ${property} is ${person[property]}.`);
}



//* BREAK 
for (let i = 1; i <= 10; i++) {
    console.log(i);

    if (i == 5) {
        break;
    }
}

console.log()

//* CONTINUE 
for (let i = 1; i <= 10; i++) {
    if (i == 3 || i == 7) {
        continue;
    }

    console.log(i);
}

