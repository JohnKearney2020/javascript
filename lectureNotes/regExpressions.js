//==========================================================================================================
//                                    Classes Examples
//==========================================================================================================
// let regex = new RegExp('digital crafts');
// let regex2 = /digital crafts/; //these are both regular expressions

// let someString = 'adsfasdf asdfasd fdgdf digital crafts lkjlkj .n,mnnm';

// let result = regex.test(someString);
// console.log(result);

// let pattern = /John/ig; //the i makes it case insensitive, g means global and will match all occurences into an array
// let someString = 'asdfasd johnavxcvx ouoiu ;alkjd;fj absdfbasn a John asldfjalsk awerwe sdsd';

// let result = pattern.exec(someString);
// console.log(result);

// let arr = someString.match(pattern);
// console.log(arr);

// let replace = someString.replace(pattern, 'John')
// console.log(replace);



let pattern = /\s/g;
let str = 'We will remove all spaces from this string.'
let result = str.replace(pattern, "");
console.log(result);

