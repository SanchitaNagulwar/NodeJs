
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}


class Student extends Person {

}

let student1 = new Student('Sanchita');
student1.greet();