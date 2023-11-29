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
    public constructor(p_name:string);
    public constructor(p_name:string, age?:number, cpf?:string){
        this.person_name =  p_name;

        if (age){
            this.age = age;
        }
        if (cpf){
            this.cpf = cpf;
            this.print_name_and_cpf();
        }

    }

    // don`t use the word `function` inside a class
    private print_name_and_cpf(){
        console.log(`Seu nome é: ${this.person_name}\n` +
                    `cpf: ${this.cpf}`);
        
    }
}


// create instance
let person1 = new Person("Arthur");
let person2 = new Person("Arthur", 21, "1234");

console.log(person1.person_name, person1.age);
console.log(person2.person_name, person2.age);
