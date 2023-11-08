var input = `2\n3\n4\n5\n6\n7\n8\n9\n0`;
var lines = input.split('\n');

// get initial value
let value = parseInt(lines.shift());
// loop to show the desired 2d arrays while value != 0
while(value > 0){
    // create an empty array
    let nums_2d = [];
    // create columns, temp str, fill up the 2d array, print the lines
    for (let i = 0; i < value; i++){
        nums_2d.push([]);
        let str = "";
        for(let j = 0; j < value; j++){
            if (j != i){
                // add element according the position
                // get the value of i + 1 - j or the last value + 1
                nums_2d[i][j] = j < i ? (i+1) - j : nums_2d[i][j-1] + 1;
            }
            else{
                // if j and i are equals, the value is 1
                nums_2d[i][j] = 1;
            }
            // concat str
            str += ` ${nums_2d[i][j].toString().padStart(3)}`;
        }
        console.log(" ", str.trim());
    }
    // jump line and get next value
    console.log();
    value = parseInt(lines.shift());
}