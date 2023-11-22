// declare a function that receive 2 numbers and
// return the result of the sum of those numbers
function sum_nums(x:number, y:number):number {
    return x + y;
}

// a void func
function print_user_name(user_name:string):void{
    console.log(user_name);

}

let result:number = sum_nums(10, 5);
print_user_name("Arthur")

console.log(result);
