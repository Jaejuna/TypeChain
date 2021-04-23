//interface doesn't pass to js after compile but class does
//yarn add tsc-watch --dev = automatic compile *see package.json & tsconfige.json

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name:string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const Sooin = new Human("Soo-in", 21, "female");
const JJJ = new Human("jajuna", 23, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} and you are a ${person.gender}!`;
};

console.log(sayHi(Sooin));

export {};