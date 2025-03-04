"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const greet = (name) => {
    return `Hello, ${name}`;
};
console.log(greet('Basanta'));
// type annotation!
let userName = 'Basanta';
let age = 17;
let isAdult = false;
console.log(typeof userName, typeof age, typeof isAdult);
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
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve('Data loaded'), 2000);
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Start');
        const data = yield fetchData();
        console.log(data);
    });
}
main();
// Output:
// Start
// (After 2 seconds) -> "Data loaded"
