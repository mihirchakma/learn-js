
// Sets are a new object type with ES6 (ES2015) that allow to create collections of unique values.
// Sets are unique values of any type.
const set = new Set();

set.add("Linkedin");
set.add("Twitter");
set.add("Facebook");
set.add("Instagram");
set.add("Facebook"); // duplicate value

console.log(set);

// Size - property to get the size of the set 
console.log(set.size); // 4


const anotherSet = new Set();

anotherSet.add("Cake");
anotherSet.add("Ice Cream");
anotherSet.add("Cookies");
anotherSet.add("Donuts");

// Has - method to check if a value exists in the set or not 
console.log(anotherSet.has("Cake"));
console.log(anotherSet.has("Pie"));


// Delete - method to delete a value from the set
anotherSet.delete("Ice Cream");
console.log(anotherSet);


// Clear - method to clear the set 
anotherSet.clear();
console.log(anotherSet);


console.log("------------");

// Iterating over a set
const newSet = new Set();

newSet.add("Cake");
newSet.add("Ice Cream");
newSet.add("Cookies");
newSet.add("Donuts");

// for...of loop
for (const item of newSet) {
    console.log(item);
}

console.log("------------");

// forEach loop
newSet.forEach((item) => {
    console.log(item);
});

