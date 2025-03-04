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

// Generics

// function wrapData<T>(data: T): { data: T } {
//   return { data };
// }

// // Decorators!

// function Log() {
//   return function (target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log(`Calling ${key} with args:`, args);
//       return originalMethod.apply(this, args);
//     };
//   };
// }

// class UserService {
//   @Log()
//   getUser(id: number) {
//     return { id, name: 'John Doe' };
//   }
// }

// const service = new UserService();
// service.getUser(1);
// // Output: Calling getUser with args: [1]

// Understanding promises

async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded'), 2000);
  });
}

async function main() {
  console.log('Start');
  const data = await fetchData();
  console.log(data);
}

main();
// Output:
// Start
// (After 2 seconds) -> "Data loaded"
