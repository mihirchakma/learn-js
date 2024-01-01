const dog = {
    name: "Bruno",
    age: 5,
    bark: function() {
        console.log("WOOF WOOF!");
    }
};

console.log(dog.name);
console.log(dog.age);

dog.bark();


// Re-assigning properties
dog.age = 7;
dog.weight = 20;

console.log(`Dog age: ${dog.age}`);
console.log(`Dog weight: ${dog.weight}`);

console.log(dog);


const cat = {
    name: "Fluffy",
    age: 3,
    bark: function() {
        console.log("MEOW MEOW!");
    }
};


// HasOwnProperty - to check if a property exists in an object 
console.log(`Has cat's name? ${cat.hasOwnProperty("name")}`);
console.log(`Has cat's weight? ${cat.hasOwnProperty("weight")}`);


// Key - to check all the keys in an object
console.log(Object.keys(cat));


// Values - to check all the values in an object
console.log(Object.values(cat));


// Entries - to check all the entries in an object
const lion = {
    name: "Cooper",
    age: 3,
    bark: function () {
        console.log("ROAR ROAR");
    }
};


