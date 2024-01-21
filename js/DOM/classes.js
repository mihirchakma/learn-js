const fruit = document.querySelector(".apple");

fruit.classList.add("tasty");

fruit.classList.remove("tasty");

// Check if element contains class
if (fruit.classList.contains("tasty")) {
    console.log("This fruit is tasty!");
} else {
    console.log("This fruit is not tasty!");
}

