// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                                              Medium Problems
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// ==================================
//             #1 - Madlib
// ==================================
// function madlib(name, subject) {
// 	var string1 = name + "'s favorite subject in school is " + subject + '.';
// 	return string1;
// }
// console.log(madlib('Anushka', 'art'));

// ==================================
//          #2 - Tip Calculator
// ==================================
// function tipAmount(service, amount) {
// 	switch (service) {
// 		case 'good':
// 			return amount * 0.2;
// 			break;
// 		case 'fair':
// 			return amount * 0.15;
// 			break;
// 		case 'bad':
// 			return amount * 0.1;
// 			break;
// 		default:
// 			return 'Invalid Entry';
// 	}
// }
// console.log(tipAmount('good', 100));
// console.log(tipAmount('fair', 100));
// console.log(tipAmount('bad', 100));

// ==================================
//          #3 - Tip Calculator 2
// ==================================
// function totalAmount(service, amount) {
// 	var tip = tipAmount(service, amount);
// 	return tip + amount;
// }
// console.log(totalAmount('good', 100));
// console.log(totalAmount('fair', 100));
// console.log(totalAmount('bad', 100));

// ==================================
//          #4 - Print Numbers
// ==================================
// function printNumbers(startNum, endNum) {
// 	for (var i = startNum; i <= endNum; i++) {
// 		console.log(i);
// 	}
// }

// function printNumbers2(startNum, endNum) {
// 	var i = startNum;
// 	while (i <= endNum) {
// 		console.log(i);
// 		i++;
// 	}
// }
// printNumbers(1, 5);
// printNumbers2(1, 5);

// ==================================
//          #5 - Print a Square
// ==================================
// function printSquare(num) {
// 	var ast = '*';
// 	ast = ast.repeat(num);
// 	for (var i = 1; i <= num; i++) {
// 		console.log(ast);
// 	}
// }
// // printSquare(5);

// // OR

// function printSquare2(num) {
// 	var ast = '';
// 	var i = 1;
// 	// this gets us the row of asterisks we need
// 	while (i <= num) {
// 		ast += '*';
// 		i++;
// 	}
// 	var ii = 1;
// 	while (ii <= num) {
// 		console.log(ast);
// 		ii++;
// 	}
// }
// printSquare2(5);

// ==================================
//          #6 - Print a Box
// ==================================
// function printBox(width, height) {
// 	var topBottom = '*';
// 	topBottom = topBottom.repeat(width);

// 	//OR
// 	// var topBottom = '';
// 	// for (var i = 1; i <= width; i++) { //figure out the top and bottom rows
// 	// 	topBottom += '*'
// 	// }

// 	//this populates the middle row
// 	var middle = '*';
// 	if (height > 2) {
// 		for (var ii = 2; ii <= width; ii++) {
// 			if (ii == width) {
// 				middle += '*';
// 			} else {
// 				middle += ' ';
// 			}
// 		}
// 	}

// 	for (var iii = 1; iii <= height; iii++) {
// 		if (iii == 1) {
// 			console.log(topBottom);
// 		} else if (iii === height) {
// 			console.log(topBottom);
// 		} else {
// 			console.log(middle);
// 		}
// 	}
// }
// printBox(3, 5);

// ==================================
//          #7 - Print a Banner
// ==================================
// function printBanner(string) {
// 	var stringLength = string.length;
// 	var width = stringLength + 4;
// 	var topBottom = '*';
// 	topBottom = topBottom.repeat(width);
// 	var middle = '*' + ' ' + string + ' ' + '*';

// 	console.log(topBottom);
// 	console.log(middle);
// 	console.log(topBottom);
// }

// printBanner('Welcome to DigitalCrafts');

// ==================================
//          #8 - Leetspeak
// ==================================
// function leetspeak(leetString) {
// 	// leetString = leetString.lower()
// 	var newString = '';
// 	for (each_letter of leetString) {
// 		switch (each_letter.toLowerCase()) {
// 			case 'a':
// 				newString += '4';
// 				break;
// 			case 'e':
// 				newString += '3';
// 				break;
// 			case 'g':
// 				newString += '6';
// 				break;
// 			case 'l':
// 				newString += '1';
// 				break;
// 			case 'o':
// 				newString += '0';
// 				break;
// 			case 's':
// 				newString += '5';
// 				break;
// 			case 't':
// 				newString += '7';
// 				break;
// 			default:
// 				newString += each_letter;
// 		}
// 	}
// 	return newString;
// }
// console.log(leetspeak('Leet'));
// console.log(leetspeak("Let's have a party playa"));

// ==================================
//          #9 - Long-long Vowels
// ==================================
// function longVowels(vowelString) {
// 	var newLongString = '';
// 	var timesToRepeatVowel = 4;
// 	var longVowelCount = 0;
// 	var previousLetter = '';
// 	for (each_letter of vowelString) {
// 		if (each_letter == previousLetter) {
// 			switch (each_letter.toLowerCase()) {
// 				case 'a':
// 					newLongString += 'a'.repeat(timesToRepeatVowel);
// 					previousLetter = each_letter;
// 					break;
// 				case 'e':
// 					newLongString += 'e'.repeat(timesToRepeatVowel);
// 					previousLetter = each_letter;
// 					break;
// 				case 'i':
// 					newLongString += 'i'.repeat(timesToRepeatVowel);
// 					previousLetter = each_letter;
// 					break;
// 				case 'o':
// 					newLongString += 'o'.repeat(timesToRepeatVowel);
// 					previousLetter = each_letter;
// 					break;
// 				case 'u':
// 					newLongString += 'u'.repeat(timesToRepeatVowel);
// 					previousLetter = each_letter;
// 					break;
// 				default:
// 					newLongString += each_letter;
// 					previousLetter = each_letter;
// 			}
// 		} else {
// 			newLongString += each_letter;
// 			previousLetter = each_letter;
// 		}
// 	}
// 	return newLongString;
// }
// console.log(longVowels('Good'));
// console.log(longVowels('Cheese'));
// console.log(longVowels('Man'));

// =================================================
//          #10 - Just the positives
// =================================================
// function positiveNumbers(numArray) {
// 	newPosArray = [];
// 	for (each_number of numArray) {
// 		if (each_number >= 0) {
// 			newPosArray.push(each_number);
// 		} else {
// 			// pass
// 		}
// 	}
// 	return newPosArray;
// }
// console.log(positiveNumbers([ 1, -3, 5, -3, 0 ]));
// console.log(positiveNumbers([ 1, 2, 3 ]));
// console.log(positiveNumbers([ -1, -2, -3 ]));

// =================================================
//          #11 - Ceaser Cypher
// =================================================
// function ceaserCipher(stringToScramble, offset) {
// 	var scrambledString = '';
// 	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// 	var letterNumber = 0;
// 	var alphabetCount = 0;
// 	var offsetLetterCount = 0;
// 	var offsetLetterNumber = 0;
// 	if (offset > 26) {
// 		offset = offset % 26;
// 	}
// 	for (eachLetter of stringToScramble) {
// 		alphabetCount = 0; //this needs to be reset with each loop of the outer For loop
// 		if (eachLetter == ' ') {
// 			scrambledString += ' ';
// 		} else {
// 			for (eachLetterAlpha of alphabet) {
// 				alphabetCount++;
// 				if (eachLetter.toLowerCase() == eachLetterAlpha.toLowerCase()) {
// 					letterNumber = alphabetCount;
// 					offsetLetterNumber = letterNumber + offset;
// 					if (offsetLetterNumber > 26) {
// 						offsetLetterNumber = offsetLetterNumber % 26;
// 					}
// 					for (eachOffsetLetter of alphabet) {
// 						offsetLetterCount++;
// 						if (offsetLetterCount == offsetLetterNumber) {
// 							scrambledString += eachOffsetLetter;
// 							offsetLetterCount = 0;
// 							offsetLetterNumber = 0;
// 							letterNumber = 0;
// 							alphabetCount = 0;
// 							break;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return scrambledString;
// }
// // console.log(ceaserCipher('Genius without education is like silver in the mine', ));
// console.log(ceaserCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 23));
// console.log(ceaserCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23));

// =================================================
//          #12 - Ceaser Cypher2
// =================================================
function ceaserCipher(stringToUnScramble, offset) {
	var scrambledString = '';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var letterNumber = 0;
	var alphabetCount = 0;
	var offsetLetterCount = 0;
	var offsetLetterNumber = 0;
	if (offset > 26) {
		offset = offset % 26;
	}
	offset;
	for (eachLetter of stringToUnScramble) {
		alphabetCount = 0; //this needs to be reset with each loop of the outer For loop
		if (eachLetter == ' ') {
			scrambledString += ' ';
		} else {
			for (eachLetterAlpha of alphabet) {
				alphabetCount++;
				if (eachLetter.toLowerCase() == eachLetterAlpha.toLowerCase()) {
					letterNumber = alphabetCount;
					offsetLetterNumber = letterNumber - offset;
					if (offsetLetterNumber < 0) {
						//We need to keep this number positive.
						offsetLetterNumber = offsetLetterNumber * -1;
						//and we need to 'reset' it
						offsetLetterNumber = 26 - offsetLetterNumber;
					}
					if (offsetLetterNumber > 26) {
						offsetLetterNumber = offsetLetterNumber % 26;
					}
					for (eachOffsetLetter of alphabet) {
						offsetLetterCount++;
						if (offsetLetterCount == offsetLetterNumber) {
							scrambledString += eachOffsetLetter;
							offsetLetterCount = 0;
							offsetLetterNumber = 0;
							letterNumber = 0;
							alphabetCount = 0;
							break;
						}
					}
				}
			}
		}
	}
	return scrambledString;
}
// console.log(ceaserCipher('Genius without education is like silver in the mine', ));
// console.log(ceaserCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 23));
// console.log(ceaserCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23));
console.log(ceaserCipher('Xyzabcdefghijklmnopqrstuvw', 23));
