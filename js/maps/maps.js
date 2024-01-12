
const map = new Map();

map.set("red", "apple"); // lost old value "red" => "apple"
map.set("yellow", "banana");
map.set("green", "melon");
map.set("red", "strawberry");

console.log(map);

// Get value by key
const item = map.get("red");

console.log(item);


// getting size of map 
console.log(map.size);


// has method to check if key exists
console.log(map.has("red"));
console.log(map.has("yellow"));
console.log(map.has("blue")); // ther is no blue key, so it returns false

// to delete key and value, we use delete method
map.delete("green");

console.log(map);

// clear method to delete all keys and values
map.clear();

console.log(map);
