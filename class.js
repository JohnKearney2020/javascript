// console.log('Hello World 2');
// var school = "Dig Crafts";

// function myFunction (){
//     // indentation is not important in Javascript
// }

// // allow for multiple line strings
// var myString = `Hello
// world
// now`;
// console.log(myString);

// var string1 = "String";
// var string2 = "concat";
// var string3 = string1 + " " + string2;
// console.log(string3);

// var myBool = true;
// console.log(string3.length);
// var num = 1; //integer
// var num2 = 1.2; //float

// var myString = "school";

// // getting the index of a letter
// console.log(string1.indexOf("S"))

// var boolean = !true;
// console.log(boolean);
// var not = !boolean;
// console.log(not);

// Boolean Operators
// && is equivalent to "And"
// || is equiv to "Or"
// == is equiv to equality between two values
// ! is equiv to Not
// <, >, <=, >= are the same
// var a = 5;
// var b = 5;
// if (a == b){
//     console.log("equality")
// }

// var age = 19;
// if (age >= 21) {
//     console.log("You get free beer");
// } else if (age < 18) {
//     console.log("What are you even doing here?")
// }
// else {
//     console.log("Sorry, no beer for you.")
// }


// expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.'); //this is not quite equivalent to an f-string, but will place a variable in the string
// }



// equivalent to 'Select Case' in
// var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
    
// }

// while loop
// var count = 0;
// while (count < 10) {
//     console.log(count);
//     //count = count + 1;
//     count++;
// }

// For loop
// for (var count=0; count < 10; count ++)
// {
//     console.log(count);
//     for (var inner = 0; count < 3; inner++)
//     {
//         console.log('Inner: ' + count);  
//     }
// }

// arrays
// var lottoNums = [];
// lottoNums.push(23);
// lottoNums.push(11);
// lottoNums.push(43);
// lottoNums.push(19);
// lottoNums.push(37);
// lottoNums.push(16);
// console.log(lottoNums)

// // pop will get rid of the very last element
// lottoNums.pop()
// console.log(lottoNums)

// // access a specific element
// console.log(lottoNums[0]); //23
// console.log(lottoNums[3]); //19
// // undefined
// console.log(lottoNums[300000]);
// // change a value
// lottoNums[1] = "hello"
// console.log(lottoNums)

// // .shift() will get rid of the first element in an array
// lottoNums.shift()
// console.log(lottoNums)

// splice REMOVES elements
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 1); //this will return just one value, the one at index 2
// console.log(arrayOfSplicedValues);

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues); 

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues =
// lottoNums.splice(2, );
// console.log(arrayOfSplicedValues); 

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues =
// lottoNums.splice(0, 3);
// console.log(arrayOfSplicedValues); 

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2,3));

// var words = 'oh hey how is it going'.split(' ');
var words = 'oh hey how is it going'
// console.log(words);
// ["oh", "hey", "how", "is", "it", "going"]
// var newArray = words.split(' ')
// console.log(newArray)

// var words2 = newArray.join(' ')
// console.log(words2)

// reverse a string entirely
// var wordsSplit = words.split('');
// console.log(wordsSplit);
// var reversedWords = wordsSplit.reverse();
// console.log(reversedWords);
// var final = reversedWords.join('')
// console.log(final)

// reverse a string entirely
// var wordsSplit = words.split('');
// console.log(wordsSplit);
// wordsSplit = wordsSplit.reverse();
// console.log(wordsSplit);
// wordsSplit = wordsSplit.join('')
// console.log(wordsSplit)

// var myArray = [1, 2, 5, 7, 11, 12];

// for (var i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

// Objects ((dictionaries)) - review this later

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// console.log(characterSheet["name"])
// console.log(characterSheet)

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// };
// console.log(characterSheet);
// delete characterSheet['title'];
// console.log(characterSheet);

// var key = 'lname';
// characterSheet[key];
// console.log(characterSheet[key])


// name is a parameter. The value that gets mapped there is called the argument
function hello (fname, lname) {
    var output = 'Hello ' + fname + ' ' + lname;
    console.log(output);
    return output;
}

var myReturn = hello('John', 'Kearney');
console.log(myReturn)
