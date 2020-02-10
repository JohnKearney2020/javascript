let buttons = document.querySelector('.buttons');
let display = document.getElementById('display');
let equalsButton = document.getElementById('equalsButton');
let stringStorage = [];
let numStorage = [];
let decimalLimit = false;
let operationsLimit = false;
let acceptableInputs = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.' ];
let operators = [ '+' ];
let sum = 0;

buttons.addEventListener('click', function(e) {
	// console.log(e.target.textContent);
	let usersClick = e.target.textContent;
	if (acceptableInputs.includes(usersClick) && operationsLimit == false) {
		//first thing, check for and limit repeating decimals
		if (usersClick != '.') {
			//if it's not a decimal
			display.textContent = display.textContent + usersClick;
		} else if (decimalLimit == false) {
			//if it is a decimal
			display.textContent = display.textContent + usersClick;
			decimalLimit = true; //this will keep users from inputting two decimals on the same number
		}
	} else if (operators.includes(usersClick)) {
		//this is where our code for operators goes
		//we don't need operationsLimit check here b/c users can always input an operation
		display.textContent = display.textContent + usersClick;
		operationsLimit = false; //after choosing an operator, the next input will be a new number, therefore we need to allow them to input decimals again.
	} else if (usersClick == '=') {
		//if the user clicks the equals sign
		stringStorage = display.textContent; //put the array of numbers and operators as strings for the display  into the stringStorage array
		// console.log(stringStorage);
		stringStorage = stringStorage.split('+'); //split the arrray on the '+' operator
		// console.log(stringStorage);
		numStorage = stringStorage.map(function(each_number) {
			//convert each number string to a float and put it in the numStorage array
			return parseFloat(each_number);
		});
		sum = numStorage.reduce(function(total, next_number) {
			return total + next_number;
		});
		display.textContent = sum;
		// console.log(numStorage);

		//reset some things - the value we just calculated is stored in the display, mind you
		sum = 0;
		stringStorage = [];
		numStorage = [];
		operationsLimit = true; //users will no longer be able to input new numbers, but they can do operators
		decimalLimit = false; //when it is legal for a user to again input decimals, this will let them
	} else if (usersClick == 'C') {
		stringStorage = 0;
		numStorage = 0;
		display.textContent = '';
		decimalLimit = false;
		operationsLimit = false;
		sum = 0;
	}
});
