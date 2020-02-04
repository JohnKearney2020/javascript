console.log('Hello World 2');
var school = "Dig Crafts";

function myFunction (){
    // indentation is not important in Javascript
}

// allow for multiple line strings
var myString = `Hello
world
now`;
console.log(myString);

var string1 = "String";
var string2 = "concat";
var string3 = string1 + " " + string2;
console.log(string3);

var myBool = true;
console.log(string3.length);
var num = 1; //integer
var num2 = 1.2; //float

var myString = "school";

// getting the index of a letter
console.log(string1.indexOf("S"))

var boolean = !true;
console.log(boolean);
var not = !boolean;
console.log(not);

// Boolean Operators
// && is equivalent to "And"
// || is equiv to "Or"
// == is equiv to equality between two values
// ! is equiv to Not
// <, >, <=, >= are the same
var a = 5;
var b = 5;
if (a == b){
    console.log("equality")
}

// var age = 19;
// if (age >= 21) {
//     console.log("You get free beer");
// } else if (age < 18) {
//     console.log("What are you even doing here?")
// }
// else {
//     console.log("Sorry, no beer for you.")
// }


expr = "Papayas";
if(expr == 'Oranges')
{
    console.log('Oranges are $0.59 a pound.');
}
else if(expr == 'Mangoes')
{
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
}
else if(expr == 'Papayas')
{
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
}
else
{
    console.log('Sorry, we are out of ' + expr + '.'); //this is not quite equivalent to an f-string, but will place a variable in the string
}



var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
    
}





