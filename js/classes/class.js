class Pet {

    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    printInfo() {
        return `Name: ${this.name}, Weight: ${this.weight}, Price: ${this.price}`;
    }
}

const pet1 = new Pet("Fluffy", 20, 2000);
// console.log(pet);
console.log(pet1.printInfo());

const pet2 = new Pet("Oreo", 10, 1000);
console.log(pet2.printInfo());

const pet3 = new Pet("Buddy", 30, 3000);
console.log(pet3.printInfo());

