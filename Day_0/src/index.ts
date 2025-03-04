const greet = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(greet('Basanta'));

// type annotation!
let userName: string = 'Basanta';
let age: number = 17;
let isAdult: boolean = false;

console.log(typeof userName, typeof age, typeof isAdult);
// userName = 1; // error

// Working with interfaces and Types!

interface User {
  name: string;
  age: number;
  status: Status;
}

type Status = 'active' | 'inactive';
