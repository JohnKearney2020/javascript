// let testArray = [3, 5, 11, 11, 6];

// function checkHandValue(handArray) {
// 	let defaultSum = 0;
// 	let aceCount = 0;
// 	for (each_value of handArray) { //first get the values of the hand assuming Aces are = 11 points
// 		defaultSum += each_value;
// 		if (each_value == 11) { //while we sum, count the # of aces we have
// 			aceCount += 1;
// 		}
// 	}

// 	if (defaultSum > 21 && aceCount == 0) {//if there are no aces and the sum is > 21, return the sum.The player has lost.
// 		return defaultSum;
// 	}
// 	else if (defaultSum < 21) { //if the default sum < 21 the player is fine
// 		return defaultSum;
// 	}
// 	else { //only option left is a defaultSum > 21 with one or more aces
// 		if (aceCount == 1) { //if we are over 21 with one ace, we have to make that Ace equal to 1
// 			return defaultSum - 10; //this is equivalent to choosing your single ace to be == 1
// 		} else if (aceCount > 1) {
// 			for (let i = 1; i <= aceCount; i++){ //this loop will look at our defaultSum for each ace
// 				//it starts by assuming the first ace is equal to 1
// 				//after that, it sees if the new sum is below 21. If it is, we exit out of this loop.
// 				//if the new sum is still > 21, we move on to the next ace and assume its value is 1, and repeat this process
// 				//until either the sum gets under 21 or we run out of aces
// 				defaultSum = defaultSum - 10;
// 				if (defaultSum <= 21) {
// 					break //once we get under 21, exit this for loop
// 				} 
// 			}
// 			return defaultSum;
// 			}
// 		}
// 	}
// console.log(checkHandValue(testArray));