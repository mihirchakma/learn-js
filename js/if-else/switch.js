// Switch Statement

// Syntax:

/* switch(expression) {
    case x:
      //* code block
      break;
    case y:
      //* code block
      break;
    default:
      //* code block
  } */


// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


const color = "yellow" 

switch (color) {
  case "red":
    console.log("I want to eat an Apple");
    break;
  case "yellow":
    console.log("I want to eat a Banana");
    break;
  case "orange":
    console.log("I want to eat an Orange");
    break;
  case "green":
    console.log("I want to eat a Pear");
    break;
  default:
    console.log("I want to eat Grapes")
}


// Switch Using function
function getFruitByColor(color) {
  switch (color) {
      case "red":
          return "apple";
      case "yellow":
          return "banana";
      case "orange":
          return "orange";
      case "green":
          return "pear";
      default:
         return "grape";
  }
}

const favoriteColor = "yellow";
const fruit = getFruitByColor(favoriteColor);

console.log("I want to eat a " + fruit);

