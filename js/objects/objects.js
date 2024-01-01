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


