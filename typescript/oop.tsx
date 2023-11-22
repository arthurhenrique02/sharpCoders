class Person {
    // attributes
    // it`s not needed to put 'let' or something else
    // before attribute`s declaration
    person_name:string;
    age:number;
    city:string

    // tried to overload
    //constructor();
    constructor(p_name:string, age:number){
        this.person_name =  p_name;
        this.age = age
    }
}


// create instance
let person = new Person("Arthur", 21);

console.log(person.person_name, person.age);
