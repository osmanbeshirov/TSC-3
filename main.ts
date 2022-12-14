// const sayHello = (message: string) => {
//     console.log(message)
// }

// sayHello('Hi')

// Types in TS
// 1. Any
// 2. Number
// 3. String
// 4. Boolean
// 5. Arrays string[], number[], any[]
// 6. Enum
// 7. Tuple[type1, type2]
// 8. Unknown
// 9. TYPE INFERENCE ?

// let a: any;
// a = 5;
// a = '5'
// a = true;

// let x: string;
// x = 'HI Osman';

// let y: number;
// y = 12;
// y = 30;

// let z: boolean;
// z = true;
// z = false;


// let myStrArray: string[];
// myStrArray = ['a', 'b', 'c']



// enum Color { Purple, Black, Red }
// let bgColor = Color.Red;
// bgColor = Color.Purple;

//tuple type
// let error: [string, number];
// error = ['not found', 404]


// let a: boolean;
// a = true;



// let x: string;
// let b: unknown;

// x = b

// let b: boolean;
// let x: any;

// b = x

// let y: unknown;
//daha oncesinde a deyisenine boolean tipi teyin edildiyi ucun, unknown teyin etdiyimiz deyiseni
//boolean tipi olaraq teyin etdiyimiz deyisene mensub etmek olmur.
// a = y


//Type Assertions - Typescript shut up!!!
// let message;

// message = 'kenan'
//first method
// const newMessage = (<string>message)

//second method
// const newMessage = (message as string).toUpperCase()

// console.log(newMessage)


//object type

//method 1
// let user: {
//     name: string;
//     age: number;
//     job: string
// } = {
//     name: 'Osman',
//     age: 22,
//     job: 'Developer'
// }

//method 2;
// let user: {
//     name: string;
//     age: number;
//     job: string
// }

// user = {
//     name: 'Osman',
//     age: 21,
//     job: "Developer"

// }

//union types
// let user: {
//     name: string;
//     age: number | string;  //union type
//     role: 'admin' | 'user' // literal type
// }

// user = {
//     name: 'Osman',
//     age: '23',
//     role: 'admin'
// }


//Custom types
// type Color = {
//     name: string,
//     hex: string
// }

// let user: {
//     name: string;
//     age: string | number;
//     role: 'admin' | 'user';
//     color: Color
// }

// user = {
//     name: 'Osman',
//     age: '23',
//     role: 'admin',
//     color: {
//         hex: '#2s3123',
//         name: 'purple'
//     }
// }


// console.log(user)



//Functions

// const add = (num1: number, num2: number): boolean => {
//     if (num1 + num2 > 10) {
//         return true
//     }
//     else {
//         return false;
//     }
// }

// console.log(add(5, 2))

//Default, Optional params

// const logUser = (firstName: string, lastName?: string) => {  //optioanl params
//     console.log(`${firstName}  ${lastName}`)
// }

// logUser('Osman');



// const logUser = (firstName: string, lastName = 'Bashirov') => {  //default params
//     console.log(`${firstName}  ${lastName}`)
// }

// logUser('Osman')



// const logUser = (firstName: 'Osman' | 'Kanan', lastName: string | number) => {  //union and literal types can be also in ts functions params
//     console.log(`${firstName}  ${lastName}`)
// }

// logUser('Kanan', 12)

// type User = {
//     name: string,
//     surname: string,
//     gender: 'man' | 'women'
// }

// type User = {
//     name: string,
//     surname: string,
//     gender: 'man' | 'woman'
// }

// let user: {
//     name: string;
//     surname: string;
//     gender: 'man' | 'woman'
// }

// user = {
//     name: 'Osman',
//     surname: 'Bashirov',
//     gender: 'man'
// }

// const logUser = (person: User) => {  //custom type also can be work in the functional scope like params
//     return person;
// }

// console.log(logUser(user))


//INTERFACES IN TYSPESCRIPT

// interface Employee {
//     readonly code: 1 | 0; //readonly var deye sonradan object daxilinde bu deyisene mensub etdiyimiz deyiseni deyise bilmerik
//     name: string;
//     age?: number; //sual isaresi var deye bu deyisene object daxilinde deyer oturmesek bele TS error vermeyecek
// }

// let newEmployee: Employee;

// newEmployee = {
//     name: 'Osman',
//     code: 1
// }

// console.log(newEmployee)



//EXTENDING INTERFACES

// interface Person {
//     name: string;
//     age?: number
// }

// interface Employee extends Person {
//     personalCode: 1 | 0 | "1" | "0";
//     experienceYear: number | string;
// }

// let newEmployee: Employee = {
//     name: "Osman",
//     personalCode: '1',
//     experienceYear: '5 years'
// }

// console.log(newEmployee)



//IMPLEMENT??NG INTERFACES
// interface IEmployee {
//     empCode: number;
//     name: string;
//     age: number;
//     getSalary: (num: number) => number
// }

// class Employee implements IEmployee {
//     empCode: number;
//     name: string;
//     age: number;

//     constructor(empCode: number, name: string, age?: number) { }

//     getSalary = (empCode: number) => {
//         return 1000;
//     }
// }

// let newEmployee = new Employee(243, "Kanan", 34);

// console.log(newEmployee.getSalary(2))

