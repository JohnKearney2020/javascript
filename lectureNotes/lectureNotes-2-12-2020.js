
//==========================================================================================================
//                                               Strings
//==========================================================================================================

// let index = 8;
// let myStringES5 = "Hello World!" + index.toString();
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

// let add = (a, d) => {
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
let multiplyNums = (...args)=>{
    for (let each_arg of args) {
        console.log(each_arg);
    }
}
multiplyNums(4, 6, 7, 9, `hello`);