var input = `2\n3\n4\n5\n6\n7\n8\n9\n0`;
var lines = input.split('\n');


function min(x, y){
    return x > y ? y : x;
}

let value = parseInt(lines.shift());
while(value > 0){
    let nums_2d = [];
    for(let i = 1; i <= value; i++){
        let str = "";
        nums_2d.push([]);
        for (let j = 1; j <= value; j++){
            let min_x = min(i, (value - i + 1));
            let min_y = min(j, (value - j + 1));
            let min_xy = min(min_x, min_y);
            nums_2d[i-1][j-1] = min_xy;
            str += ` ${min_xy.toString().padStart(3)}`;
        }
        console.log("  "+nums_2d.join("\n"));
    }
    console.log();
    value = parseInt(lines.shift());
    if (value === 0){
        console.log();
    }
}