let buttons = document.querySelector('.buttons');

let result = document.getElementById('result');

let input = document.getElementById('input');

let numStorage = [];
let stringStorage = [];
let sum = 0;
let limitDecimal = false; //keeps users from putting in multiple decimals
let limitOperation = false; //keeps users from entering inputs after an operation is complete. This forces them to hit the 'C' button first
let validCharacter = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.' ];
let validOperations = [ '+' ];

buttons.addEventListener('click', function(e) {
	// console.log(e.target);

	//if the target is not an '=' sign or a clear sign, then append a string to the input
	//when e.target is the '=' sign then we will split the string by the '+' symbol
	//if we split on the '+' symbol, we get an array. For example, if we had the string
	//94+56.2, we'd get an array of [94, 56.2]
	//add all of the conent using the reduce method and display results on our screen
	//if C is entered, reset all of our arrays and values

	if (validCharacter.includes(e.target.textContent) && limitOperation == false) {
		if (e.target.textContent != '.') {
			//check for multiple decimals
			input.textContent = input.textContent + e.target.textContent;
		} else if (e.target.textContent == '.' && limitDecimal == false) {
			//if it's the first decimal point the user inputs
			input.textContent = input.textContent + e.target.textContent;
			limitDecimal = true;
		}
	} else if (validOperations.includes(e.target.textContent)) {
		input.textContent = input.textContent + e.target.textContent;
		limitOperation = false; //this here allows users to do operations on final values
	} else if (e.target.textContent == '=' && limitOperation == false) {
		stringStorage = input.textContent.split('+');
		// console.log(stringStorage);
		numStorage = stringStorage.map(function(strNum) {
			return parseFloat(strNum);
		});
		// console.log(numStorage);
		sum = numStorage.reduce(function(accumulator, incrementer) {
			return accumulator + incrementer;
		});

		input.textContent = sum.toString();

		numStorage = []; //reset our arrays
		stringStorage = [];
		// limitDecimal = true; //reset our 1 decimal point only boolean
		limitOperation = true;
	} else if (e.target.textContent == 'C') {
		//if the user hits C for 'clear'
		input.textContent = ''; //clear out the display
		numStorage = []; //clear out the arrays, too
		stringStorage = [];
		sum = 0; //reset our sum tally
		limitDecimal = false;
		limitOperation = false;
	}
});
