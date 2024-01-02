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

const pet = new Pet("Fluffy", 20, 2000);
console.log(pet);
console.log(pet.printInfo());

