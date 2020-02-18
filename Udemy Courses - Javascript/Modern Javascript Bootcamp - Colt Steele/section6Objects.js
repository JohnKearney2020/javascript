// const fitBitData = {
// 	totalSteps: 308727,
// 	totalMiles: 211.7,
// 	avgCalorieBurn: 5744,
// 	workoutsThisWeek: '5 of 7',
// 	avgGoodSleep: '2:13'
// 	// 45: 'forty five' //all keys are converted to strings, this will throw an error
// 	// '45': 'forty five' //this will not work either
// };

// let data = { a: 1 };

// const numbers = {
// 	100: 'one hundred',
// 	16: 'sixteen',
// 	charlie: 'brown'
// };

// const palette = {
// 	red: '#eb4d4b',
// 	yellow: '#f9ca24',
// 	blue: '#30336b'
// };

// let mysteryColor = 'yellow';

// const userReviews = {};
// userReviews['queenBee49'] = 4.0;
// userReviews.mrSmith78 = 3.5;
// userReviews.colt = '5';
// userReviews['colt'] = 5;
// userReviews['queenBee49'] += 2;

//====================================================
//            Nested arrays and objects
//====================================================
// const student = {
// 	firstName: 'David',
// 	lastName: 'Jones',
// 	strengths: [ 'Music', 'Art' ],
// 	exams: {
// 		midterm: 92,
// 		final: 88
// 	}
// };

// //get the average of the two exams
// const avg = (student.exams.midterm + student.exams.final) / 2;

//=================================================
//              An array of objects
//=================================================

// const shoppingCart = [
// 	{
// 		product: 'Jenga Classic',
// 		price: 6.88,
// 		quantity: 1
// 	},
// 	{
// 		product: 'Echo Dot',
// 		price: 29.99,
// 		quantity: 3
// 	},
// 	{
// 		product: 'Fire Stick',
// 		price: 39.99,
// 		quantity: 2
// 	}
// ];

// let jengaPrice = shoppingCart[0].product; //Jenga Classic
// let fireStickQty = shoppingCart[2].quantity; //2

// //=================================================
// //             Tic tac toe example
// //=================================================
// const game = {
// 	player1: {
// 		username: 'Blue',
// 		playingAs: 'X'
// 	},
// 	player2: {
// 		username: 'Muffins',
// 		playingAs: 'O'
// 	},
// 	board: [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
// };

// let nums = [ 1, 2, 3 ];
// let mystery = [ 1, 2, 3 ];

// // nums = mystery will eval to false b/c despite having the same values they are pointing to different places in memory
// let moreNums = nums;

// //the equals below will eval to true b/c they are pointing to the same places in memory. Any changes to either array will affect the other
// nums === moreNums;
// nums == moreNums;

// const user = {
// 	username: 'CherryGarcia8',
// 	email: 'garcia@gmail.com',
// 	notifications: [ 'message', 'alert' ]
// };

// //THIS WILL NOT WORK!
// if (user.notifications === []) {
// 	console.log('NO NEW NOTIFICATIONS!');
// }
// // THIS VERSION DOES WORK!
// //below is equiv to if (user.notifications.length == 0)
// if (!user.notifications.length) {
// 	console.log('NO NEW NOTIFICATIONS!');
// }

//=================================================
//              Looping Over Objects
//=================================================
// const movieReviews = {
// 	Arrival: 9.5,
// 	Alien: 9,
// 	Amelie: 8,
// 	'In Bruges': 9,
// 	Amadeus: 10,
// 	'Kill Bill': 8,
// 	'Little Miss Sunshine': 8.5,
// 	Coraline: 7.5
// };
//a for of loop will not work b/c an object is not itterable
// for (each_movie of movieReviews) {
// 	console.log(each_movie);
// }

for (let movie of Object.keys(movieReviews)) {
	//this will iterate over eavh key
	console.log(movie, movieReviews[movie]); //need brackets since we are using a variable, .movie won't work
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let each_rating of ratings) {
	total += each_rating;
}
let avg = total / ratings.length;
console.log(avg);

//For in loops - for in loops work on objects
const jeopardyWinnings = {
	regularPlay: 233423423,
	watsonChallenge: 3234234,
	tournamentOfChampions: 234232,
	battleOfTheDecades: 2324234
};

for (let property in jeopardyWinnings) {
	//this will give us the keys
	console.log(property);
	console.log(jeopardyWinnings[property]); //this gives us the corresponding values for the keys
}
