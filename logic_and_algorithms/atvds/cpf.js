var input = "02/08/10";
var lines = input.split('\n');

// get date and split by /
let date = lines.shift().split("/");

console.log(`${date[1]}/${date[0]}/${date[2]}`);
console.log(`${date[2]}/${date[1]}/${date[0]}`);
console.log(`${date[0]}-${date[1]}-${date[2]}`);