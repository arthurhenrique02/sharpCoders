class Person {
    // attributes
    // it`s not needed to put 'let' or something else
    // before attribute`s declaration
    person_name:string;
    age:number;
    city:string
    // private attribut
    private cpf:string;

    // tried to overload
    //constructor();
    constructor(p_name:string, age:number, cpf:string){
        this.person_name =  p_name;
        this.age = age;
        this.cpf = cpf;

        this.print_name();
    }

    // don`t use the word `function` inside a class
    private print_name(){
        console.log(`Seu nome é: ${this.person_name}\n` +
                    `cpf: ${this.cpf}`);
        
    }
}


// create instance
let person = new Person("Arthur", 21, "1234");

console.log(person.person_name, person.age);
