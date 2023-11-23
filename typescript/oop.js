var Person = /** @class */ (function () {
    // tried to overload
    //constructor();
    function Person(p_name, age) {
        this.person_name = p_name;
        this.age = age;
        this.print_name();
    }
    // don`t use the word `function` inside a class
    Person.prototype.print_name = function () {
        console.log("Seu nome \u00E9: ".concat(this.person_name));
    };
    return Person;
}());
// create instance
var person = new Person("Arthur", 21);
console.log(person.person_name, person.age);
