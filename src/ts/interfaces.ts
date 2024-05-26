// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// const user1: Person = {
//   name: 'Max',
//   age: 30,

//   greet(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// user1.greet(`Hi there, I am`);

// type AddFn = (a: number, b: number) => number;
//==============
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1, n2) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(greeting: string) {
    console.log(greeting + ' ' + this.name + ` and I am ${this.age}`);
  }
}

console.log(new Person('Max').greet('Hi my name is'));
