class Pet {

    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    printInfo() {
        return `Hi, my name is ${this.name}, I weight ${this.weight}, and cost $${this.price}.`;
    }
}

const pet1 = new Pet("Fluffy", 20, 2000);
// console.log(pet);
console.log(pet1.printInfo());

const pet2 = new Pet("Oreo", 10, 1000);
console.log(pet2.printInfo());

const pet3 = new Pet("Buddy", 30, 3000);
console.log(pet3.printInfo());

console.log();
console.log("------------Class Inheritance --------------" );

// Class Inheritance (Subclasses)
class Dog extends Pet {
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Cooper", 50, 5000);
console.log(dog.printInfo());

dog.bark();


// Function Overriding and Super Keyword
class Cat extends Pet {
    constructor(name, weight, price, brand, color) {
        super(name, weight, price);
        this.brand = brand;
        this.color = color;
    }

    getFavoriteBrand() {
        return this.brand;
    }

    catColor() {
        return this.color;
    }

    printInfo() {
        return `Hi, my name is ${this.name}, I weight ${this.weight}, and cost $${this.price}.`;
    }
}

const honey = new Cat("Honey", 10, 1000, "Purina", "White");
console.log(honey.printInfo());
console.log(honey.getFavoriteBrand());
console.log(honey.catColor());

