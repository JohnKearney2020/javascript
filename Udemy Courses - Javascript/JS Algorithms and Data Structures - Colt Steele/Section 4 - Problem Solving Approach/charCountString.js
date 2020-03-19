//write a function which takes in a string and retruns counts of each character in the string

//establish guidelines with the interviewer: in this case, they let us know we need only be concerned
//with alpha-numeric characters

//lay out the high level structure of our function
// function charCount(str) {
    //do something
    // return an objec with keys that are lowercase alphanumeric characters in the string; values should be the counts of those characters in
    // that string
// }
//========================================================
//     make a more in-depth outline of the function
//========================================================
function charCount(str) {
    // make object to return at the end
    var result = {};
    // loop over string, for each character...
    // for(eachChar of str){
    for(let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase(); //take the character and convert it to lowercase.
        //if the char is a number/letter AND a key in the object, add one to count
        if(result[char] > 0) { //if the character is already present in result. Will be undefined if it is not.
            result[char]++;
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        } else {
            result[char] = 1; //if it is not already present, set == 1
        }
    }

    //if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}

console.log(charCount('Hi There!'));

//==============================================================================================
// At this point, we are 90% of the way there, and we end the Step 4: Solve or Simplify section
//==============================================================================================
//this is a fully refactored example at the end
function charCount(str) {
    var result = {};
    for(let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){ //this regular expression filters for alphanumeric
            if(result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}
console.log(charCount('Hi There!'));

//===============================
//    Ultra refactored version
//===============================
function charCount(str) {
    var result = {};
    for(let eachChar of str){
        eachChar = eachChar.toLowerCase();
        if(/[a-z0-9]/.test(eachChar)){ //this regular expression filters for alphanumeric
            result[eachChar] = ++result[eachChar] || 1;
        }
    }
    return result;
}
console.log(charCount('Hi There!'));

//=======================================================================
//    Final version with a more effecient way of varifying alpha-numeric
//=======================================================================
//This is overkill for an interview, but a good exercise
function charCount(str) {
    var result = {};
    for(let eachChar of str){
        if(isAlphaNumeric(eachChar)){ //see function below
            eachChar = eachChar.toLowerCase();
            result[eachChar] = ++result[eachChar] || 1;
        }
    }
    return result;
}
console.log(charCount('Hi There!'));

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0); //index 0 b/c it's a 1 character string
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code >96 && code < 123)) { //lower alpha (a-z)
            return false;
        }
    return true;
}



//===============================
//    General Notes
//===============================
//If the more complex problem is difficult to solve, start by solving a simpler problem 
// 