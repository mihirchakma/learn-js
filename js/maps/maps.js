
const map = new Map();

map.set("red", "apple"); // lost old value "red" => "apple"
map.set("yellow", "banana");
map.set("green", "melon");
map.set("red", "strawberry");

console.log(map);

