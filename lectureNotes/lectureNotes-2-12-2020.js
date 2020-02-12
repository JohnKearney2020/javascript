
//==========================================================================================================
//                                               Strings
//==========================================================================================================
//Template literals are strings enclosed by backticks, ``

// let index = 8;
// ES5 way
// let myStringES5 = "Hello World!" + index.toString();
// ES6 way
// let myStringES6 = `"Hello WOrld! ${index}`;
// console.log(myStringES6);

// let name = 'Tiger';
// let age = 13;
// console.log(`My cat is named ${name} and is ${age} years old.`);

// Date Class
// today = new Date();
// console.log(`The time and date is ${today.toLocaleString()}`);
// console.log(`The time and date is ${today.toLocaleDateString()}`);

//==========================================================================================================
//                                               New Lines in ES6
//==========================================================================================================
//this will produce new lines after each word.
// let text = ( `cat
// dog
// nickelodeon`
// );
// console.log(text);

//==========================================================================================================
//                                    Destructuring Arrays in ES6
//==========================================================================================================

// let myArray = [4, 5, 7, 3, 2, 1];
//ES5
// let a = myArray[0];
// let b = myArray[1];

//ES6 destructuring
// let [a, b, c, d, e] = [4, 7, 3, 2, 1];
// console.log(a);
// console.log(b);
// console.log(c);

// OR

// let [a, b, c, d, e] = myArray;
// console.log(a);
// console.log(b);
// console.log(c);

//==========================================================================================================
//                                    Destructuring Objects in ES6
//==========================================================================================================

//Destructuring objects
// var luke = { occupation: 'jedi', father: 'anakin' };
// var occupation = luke.occupation; // 'jedi'
// var father = luke.father; // 'anakin
// console.log(occupation); //jedi
// console.log(father); //anakin

//another way using keys
// let {occupation, father} = luke;
// console.log(occupation); //jedi
// console.log(father); //anakin


//==========================================================================================================
//                                               Arrow Functions
//==========================================================================================================
// function helloWorld (){
//     console.log(`Hello World!`);
// }
// let helloWorld = ()=>{
//     console.log(`Hello World!`);
// }

// let myFunction = ()=> {
//     console.log("new Function");
// }

// let add = (a, b) => {
//     return a + b;
// }
// helloWorld();


// setTimeout(function() {
//     console.log("hello world");
// }, 1000)

// console.log(`print this first`);


//Higher order functions with arrow functions
// let nums = [5, 7, 3, 4, 9];
// let newArray = nums.map((each_num)=> {
//     return each_num += 2;
// })

// console.log(newArray);
// let obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }
//create a function called multiply that does 5 * 20 * 3 by deconstructing our obj
// let multiply = (object)=> {
//     let {x, y, z} = object;
//     return x*y*z;
// }
// console.log(multiply(obj));

//==========================================================================================================
//                         Arrow Functions with DOM manipulation in ES6
//==========================================================================================================
// let div = document.getElementById('myID');
// div.addEventListener('click', (e)=>{

// })


//==========================================================================================================
//                                    Default Parameters for Functions
//==========================================================================================================

//ES5
// let addTwoNumbers = (a, b)=>{
//     a = a || 0; //if a exists it equals the parameter a, otherwise it equals zero so it is not undefined
//     b = b || 0;

//     return a + b;
// }
// let result = addTwoNumbers(2);
// console.log(result);

//ES6
// let addTwoNumbers = (a = 0, b = 0) => {
//     return a + b;
// }
// console.log(addTwoNumbers(1, 5));
// console.log(addTwoNumbers(2));
// console.log(addTwoNumbers());

//==========================================================================================================
//                                    Rest Parameters in ES6
//==========================================================================================================
//rest parameters are a term for an indefinite number of parameters
// let multiplyNums = (...args)=>{
//     for (let each_arg of args) {
//         console.log(each_arg);
//     }
// }
// multiplyNums(4, 6, 7, 9, `hello`);

//==========================================================================================================
//                                    Spread Operator in ES6
//==========================================================================================================
// let array1 = [1, 2, 4, 6, 9];
// let array2 = [...array1];
// array2.push(5);
// array2.push(11);
// console.log(array1);
// console.log(array2); // array 2 is a unique copy of array1. Changes to array2 do not affect array1.

//make a unique copy of an array
// let a,b,c,s,arr;
// a = [1,2];
// b = [3,4];
// c = [5,6];
// arr = [0, ...a, ...b, ...c,7, 8];
// console.log(arr);

//swap values
// let a,b;
// a = 'first';
// b = 'second';
// [b,a] = [a,b];
// console.log(a);
// console.log(b);


//==========================================================================================================
//                                    Ternary Operator in ES6
//==========================================================================================================

//ES5 way
// let a = 5;
// if (a==4) {
//     console.log(`a is equal to 4`);
// } else {
//     console.log(`a is not equal to 4`);
// }

//ES6 way
//this can be rewritten using a ternary operator
//(condition)? (true block): (else block)
// (a == 4)? console.log('a is equal to 4') : console.log('a is not equal to 4');


//==========================================================================================================
//                                    Classes in ES6
//==========================================================================================================
// 
// class ParentGreeting {

// }
// class Person extends Parent {
//     constructor(firstName, lastName, age){ //initializes all variable inside your class
//         this.firstName = firstName; //this.firstName is an 'instance variable'
//         this.lastName = lastName;
//         this.age = age;
//         this.count = 0;
//     }
//     greeting = ()=>{
//         console.log(`Hello ${this.firstName} ${this.lastName}!`);
//         this.count ++;
//     }
//     printCount = ()=> {
//         console.log(this.count);
//     }
// }

// let alena = new Person('alena', 'smith', 21);
// console.log(alena);
// console.log(alena.firstName);
// console.log(alena.lastName);
// alena.greeting();
// alena.printCount();



//==========================================================================================================
//                                    Classes Examples
//==========================================================================================================
// class Character {
//     constructor (health, power) {
//         this.health = health;
//         this.power = power;
//     }
//     attack = (enemy) => {
//         enemy.health -= this.power;
//     }
//     print = ()=>{
//         console.log(`The health of ${this.name} is ${this.health} and power is ${this.power}`);
//     }
// }
// class Hero extends Character{
//     constructor(health, power){ //initializes all variable inside your class
//         super(health, power);
//         this.name = 'hero';
//     }
// }
// class Goblin extends Character{
//     constructor(health, power) {
//         super(health, power);
//         this.name = 'goblin';
//     }
// }

// let hero = new Hero(10, 4);
// let goblin = new Goblin(8, 5);

// hero.attack(goblin);
// hero.print();
// goblin.print();


// class Todos{
//     constructor(description){
//         this.description = description;
//     }
// }
// class TodosManager{
//     constructor(){
//         this.todoArray = []
//     }
//     addTodo = (descripton) => {
//         let todo = new Todos(description);
//         this.todoArray.push(todo);
//     }
//     displayTodos = () =>{
//         //DOM logic to display todos on page
//     }
// }
// let manger = new TodosManager();
// manger.addTodo(description)


//==========================================================================================================
//                                    Regular Expressions
//==========================================================================================================