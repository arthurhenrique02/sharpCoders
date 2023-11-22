var Person = /** @class */ (function () {
    function Person(p_name, age) {
        this.person_name = p_name;
        this.age = age;
    }
    return Person;
}());
// create instance
var person = new Person("Arthur", 21);
console.log(person.person_name, person.age);
