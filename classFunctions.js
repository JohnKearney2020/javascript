// var a = 4;
// var b = 5;

// function add(a, b){
//     console.log(a + b);
// }

// var result = add(4,5);
// console.log(result)


// //self invoking function
// (function () {
//     var x = "Hello!!";      // I will invoke myself
//     console.log(x)
// })();


//pass by value
// var a = 4;
// var b = 5;
// var c = a;
// c = 88; //a is unchanged

//pass by reference
// myArrayOriginal = [1, 2, 4, 6, 7];
// myArrayCopy = myArrayOriginal;
// myArrayCopy[0] = 99; //this will change the original, too!
// console.log(myArrayOriginal);
// console.log(myArrayCopy)



//let is a block level variable assigner
// var x = 1;

// if (x == 1) {
//     let x = 2; //block level, only affects x inside this if statement
//     console.log('Inside x: '); //expected output 2
//     console.log(x); //expected output 2
// }

// console.log('outside x: '); //expect a 1
// console.log(x);

// function test() {
//     var x = 3;
// }
// test();
// console.log('outside of function:');
// console.log(x);

// //change it to return
// function test() {
//     var x = 3;
//     return x;
// }
// x = test();
// console.log('outside of function w/ return and variable assignment:'); //x is now 3
// console.log(x);


// var i = 0;

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// console.log('outside of for loop:');
// console.log(i);


// function myFunction() {
//     console.log('hello');
//     return 'hello';
// }

// let hello = myFunction();


// var result = function greeting(name) {
//     return "What's up " + name;
// }

// console.log(result);

// let result = greeting('John');
// console.log(result);

//Higher Level Functions
let add = function (num1, num2) {
    return num1 + num2;
}
let subtract = function (num1, num2) {
    return num1 - num2;
}
let multiply = function (num1, num2){
    return num1 * num2;
}
let calc = function(num1, num2, operation) {
    return operation(num1, num2);
}
// console.log(calc(3, 4, add));

// let myArrray = [2, 5, 6, 8, 9];

// myArrray.forEach(function(element){
//     console.log(element);
// })


// const companies = [
//     {name: "Company One", category: "Finance", start: 1981, end: 2003},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//     ];
// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// companies.forEach(function(dictionary){
//     // console.log(dictionary['name']);
//     console.log(dictionary.name);
// })

// for (each_dictionary of companies) {
//     // console.log(each_dictionary['name']);
//     console.log(each_dictionary.name);
// }



//Maps
// let arr = [0, 1, 2, 3, 4, 5];


// let newArr = arr.map(function(element) {
//     return 2 * element;
// })
// console.log(newArr);

const companies = [
        {name: "Company One", category: "Finance", start: 1981, end: 2003},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
        ];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let newCompArray = companies.map(function(each_company) {
    each_company.start -= 5; //changes the start value for each company
    return each_company;
})
// console.log(newCompArray);

let newCompArray2 = companies.filter(function(each_company){
    // return each_company.start >= 2000; //will only return companies that started after 2000
    return each_company.category == 'Retail';
})
// console.log(newCompArray2);

let newCompArray3 = companies.some(function(each_company){
    return each_company.category == 'Finance';
})
console.log(newCompArray3);