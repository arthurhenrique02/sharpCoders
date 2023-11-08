var input = `4\n7`;
var lines = input.split('\n');

// get size
let size = parseInt(lines.shift());
// iter through the entire file
while (size > 0){
    // create an empty array
    let nums_2d = [];
    for (let i = 0; i < size; i++){
        // create columns
        nums_2d.push([]);
        for (let j = 0; j < size; j++){
            // create an aux var
            let aux = 0;
            if (i == j){
                aux = 2;
            }
            if ((i + j + 1) === size){
                aux = 1;
            }
            // add to the array
            nums_2d[i][j] = 3 - aux;
        }
        // print
        console.log(nums_2d[i].join(""));
    }
    // get next value
    size = parseInt(lines.shift());
}