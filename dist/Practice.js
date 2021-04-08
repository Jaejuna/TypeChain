"use strict";
//interface doesn't pass to js after compile but class does
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const Suin = new Human("Su-in", 21, "female");
const JJJ = new Human("jajuna", 23, "male");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(Suin));
//# sourceMappingURL=Practice.js.map