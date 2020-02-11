let playersHand = document.getElementById('player-hand');
let playerPoints = document.getElementById('playerPoints');
let dealersHand = document.getElementById('dealer-hand');
let dealerPoints = document.getElementById('dealerPoints');
// let alertDiv = document.getElementById('alertDiv');
// alertDiv.className = "alert alert-success alert-dismissible fade show";
var playersCardValues = [];
var playerPointValue = 0;
let dealerHiddenPoints = 0;
let dealerPointValue = 0;
var dealersCardValues = [];
let playersFirstCard = '';
let playersSecondCard = '';
var dealersFirstCard = '';
var dealersSecondCard = '';
var limitInputs = true; //players can initially only deal cards

	// let bustCheck = 0;

	// let testArray = [11, 11];

function checkHandValue(handArray) {
	let defaultSum = 0;
	let aceCount = 0;
	for (each_value of handArray) { //first get the values of the hand assuming Aces are = 11 points
		defaultSum += each_value;
		if (each_value == 11) { //while we sum, count the # of aces we have
			aceCount += 1;
		}
	}

	if (defaultSum > 21 && aceCount == 0) {//if there are no aces and the sum is > 21, return the sum.The player has lost.
		return defaultSum;
	}
	else if (defaultSum <= 21) { //if the default sum < 21 the player is fine
		return defaultSum;
	}
	else { //only option left is a defaultSum > 21 with one or more aces
		if (aceCount == 1) { //if we are over 21 with one ace, we have to make that Ace equal to 1
			return defaultSum - 10; //this is equivalent to choosing your single ace to be == 1
		} else if (aceCount > 1) {
			for (let i = 1; i <= aceCount; i++){ //this loop will look at our defaultSum for each ace
				//it starts by assuming the first ace is equal to 1
				//after that, it sees if the new sum is below 21. If it is, we exit out of this loop.
				//if the new sum is still > 21, we move on to the next ace and assume its value is 1, and repeat this process
				//until either the sum gets under 21 or we run out of aces
				defaultSum = defaultSum - 10;
				if (defaultSum <= 21) {
					break //once we get under 21, exit this for loop
				} 
			}
			return defaultSum;
			}
		}
	}
// checkHandValue(testArray);


function bustCheckPlayer (handValue) {
	if (handValue > 21) {
		setTimeout(function(){
			// alert("Oh no! You busted! Your hand value: " + handValue);
			swal("You Lose", "You busted with " + handValue + " points", "error");
		}, 500);
		limitInputs = true;
	}
}


//----------------------------------------------------------------------------------------------------------------------
// ******************************************************** Deal *******************************************************
//----------------------------------------------------------------------------------------------------------------------
document.getElementById("btnDeal").addEventListener("click", function(e){
	deckOfCards = generateNewDeck();
	shuffle(deckOfCards) //we want to shuffle our deck deach time the player clicks deal
	console.log(deckOfCards);
	playersCardValues = [];
	playerPointValue = 0;
	dealersCardValues = []; 
	//cards are dealt to the players first
	// ------------------------------------- player's first card --------------------------------------------
	playersFirstCard = deckOfCards[deckOfCards.length-1]; //the 'top' card of the deck is the player's first card
	deckOfCards.pop(); //remove the player's first card from the deck
	let playersFirstCardHTML = '<img class="cardImage" src=' + '"' + playersFirstCard.imageURL + '"' + ' alt="">' + '</img>';
	playersHand.innerHTML = playersFirstCardHTML;
	playerPoints.innerText = playersFirstCard.value;
	playersCardValues.push(playersFirstCard.value); //add the card
	console.log(playersCardValues)

	//the dealer get's the next card face up
	// ------------------------------------- dealer's first card ---------------------------------------------
	// let dealersHand = document.getElementById('dealer-hand');
	// let dealerPoints = document.getElementById('dealerPoints');
	// dealerPoints.innerText = ''//needs to be reset with each deal
	dealersFirstCard = deckOfCards[deckOfCards.length-1]; //the 'top' card of the deck is the player's first card
	deckOfCards.pop(); //remove the dealer's first card from the deck
	// dealersNextCardImage = dealersNextCard.imageURL;
	dealersFirstCardHTML = '<img class="cardImage" src=' + '"' + dealersFirstCard.imageURL + '"' + ' alt="">' + '</img>';
	dealersHand.innerHTML = dealersFirstCardHTML;
	dealerPoints.innerText = dealersFirstCard.value;
	var dealerFirstCardImage = dealersFirstCard.imageURL;
	dealersCardValues.push(dealersFirstCard.value);
	// console.log(playersFirstCard.imageURL)

	// ------------------------------------- player's second card --------------------------------------------
	playersSecondCard = deckOfCards[deckOfCards.length-1]; //the 'top' card of the deck is the player's second card
	deckOfCards.pop(); //remove the player's first card from the deck
	playersSecondCardHTML = '<img class="cardImage" src=' + '"' + playersSecondCard.imageURL + '"' + ' alt="">' + '</img>';
	playersHand.innerHTML = playersHand.innerHTML + playersSecondCardHTML;
	// playerPoints.innerText = Number(playerPoints.innerText) + playersSecondCard.value;
	// console.log(playersSecondCard.imageURL);
	// checkHandValue(playersCards);
	playersCardValues.push(playersSecondCard.value); //add the card to the array of player card values
	// console.log(playersCardValues)
	// bustCheckPlayer (checkHandValue(playersCardValues));
	// console.log(playersCardValues);
	playerPointValue = checkHandValue(playersCardValues);
	// console.log('Player Point Value: ' + playerPointValue)
	playerPoints.innerText = playerPointValue;
	// console.log(playerPointValue);
	// bustCheckPlayer(playerPointValue);


	// ------------------------------------- dealer's second card ---------------------------------------------
	dealersSecondCard = deckOfCards[deckOfCards.length-1]; //the 'top' card of the deck is the player's first card
	deckOfCards.pop(); //remove the dealer's second card from the deck
	dealersSecondCardImage = "images/Gray_back.jpg"
	dealersSecondCardHTML = '<img class="cardImage" src=' + '"' + dealersSecondCardImage + '"' + ' alt="">' + '</img>';
	dealersHand.innerHTML = dealersHand.innerHTML + dealersSecondCardHTML;
	dealerHiddenPoints = dealersSecondCard.value; //this card is face down, and therefore its point value is hidden from the user
	var dealerHiddenCardImage = dealersSecondCard.imageURL;
	dealersCardValues.push(dealersSecondCard.value);
	limitInputs = false; 

	//----------------------------------------- Naturals Check -----------------------------------------
	dealerPointValue = checkHandValue(dealersCardValues);
	if (playerPointValue == 21 && dealerPointValue == 21){
		setTimeout(function(){
			// alert("It's a tie. Both dealer and player got naturals.");
			swal("It's a tie", "You and the dealer both got naturals (21 points on the opening hand)", "warning");
		}, 500);
		//start by revealing the dealers hidden card
		dealersFirstCardHTML = '<img class="cardImage" src=' + '"' + dealersFirstCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersFirstCardHTML;
		dealersSecondCardHTML = '<img class="cardImage" src=' + '"' + dealersSecondCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersHand.innerHTML + dealersSecondCardHTML;
		dealerPoints.innerText = dealerPointValue;
		limitInputs = true;
	} else if (playerPointValue == 21) {
		setTimeout(function(){
			// alert("You got a natural! You win!");
			swal("You win!", "You got a natural (21 points on the opening hand)", "success");
		}, 500);
		//start by revealing the dealers hidden card
		dealersFirstCardHTML = '<img class="cardImage" src=' + '"' + dealersFirstCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersFirstCardHTML;
		dealersSecondCardHTML = '<img class="cardImage" src=' + '"' + dealersSecondCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersHand.innerHTML + dealersSecondCardHTML;
		dealerPoints.innerText = dealerPointValue;
		limitInputs = true;
	} else if (dealerPointValue == 21) {
		setTimeout(function(){
			// alert("The dealer got a natural. You lose!");
			swal("You Lose!", "The dealer got a natural (21 points on the opening hand)", "error");
		}, 500);
		//start by revealing the dealers hidden card
		dealersFirstCardHTML = '<img class="cardImage" src=' + '"' + dealersFirstCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersFirstCardHTML;
		dealersSecondCardHTML = '<img class="cardImage" src=' + '"' + dealersSecondCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersHand.innerHTML + dealersSecondCardHTML;
		dealerPoints.innerText = dealerPointValue;
		limitInputs = true;
	}
	
});



//----------------------------------------------------------------------------------------------------------------------
// ******************************************************** HIT ********************************************************
//----------------------------------------------------------------------------------------------------------------------
document.getElementById("btnHit").addEventListener("click", function(){
	if (limitInputs == false) {
		// ------------------------------------- player's hit card --------------------------------------------
		//get the card for the hit
		let playersHitCard = deckOfCards[deckOfCards.length-1]; //the 'top' card of the deck is the player's first card
		deckOfCards.pop(); //remove the player's hit card from the deck
		
		//add the hit cards picture to the page
		playersHitCardHTML = '<img class="cardImage" src=' + '"' + playersHitCard.imageURL + '"' + ' alt="">' + '</img>';
		playersHand.innerHTML = playersHand.innerHTML + playersHitCardHTML;

		//check for a new player point value
		playersCardValues.push(playersHitCard.value); //add the card to the array of player card values
		playerPointValue = checkHandValue(playersCardValues);
		// playerPoints.innerText = Number(playerPoints.innerText) + playersHitCard.value;
		playerPoints.innerText = playerPointValue;
		bustCheckPlayer (checkHandValue(playersCardValues));
		// console.log(playersCardValues)
		// console.log(playerPointValue)
		// bustCheckPlayer (checkHandValue(playersCardValues));
	}
});



//----------------------------------------------------------------------------------------------------------------------
// ******************************************************** STAND ******************************************************
//----------------------------------------------------------------------------------------------------------------------
document.getElementById("btnStand").addEventListener("click", function(){
	if (limitInputs == false) {
		//start by revealing the dealers hidden card
		dealersFirstCardHTML = '<img class="cardImage" src=' + '"' + dealersFirstCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersFirstCardHTML;
		dealersSecondCardHTML = '<img class="cardImage" src=' + '"' + dealersSecondCard.imageURL + '"' + ' alt="">' + '</img>';
		dealersHand.innerHTML = dealersHand.innerHTML + dealersSecondCardHTML;

		//now update the dealer's point total and write it to the page
		dealerPointValue = checkHandValue(dealersCardValues);
		dealerPoints.innerText = dealerPointValue;

		//if the dealer point total is > = 17, the dealer will stay
		//if the dealer point total is < 17, they will hit	
		while (dealerPointValue < 17) { //continue hitting until the dealer gets >= 17 points
			//get the card for the hit
			let dealersHitCard = deckOfCards[deckOfCards.length-1]; //the 'top' card of the deck is the player's first card
			deckOfCards.pop(); //remove the player's hit card from the deck
			
			//add the hit cards picture to the page
			let dealersHitCardHTML = '<img class="cardImage" src=' + '"' + dealersHitCard.imageURL + '"' + ' alt="">' + '</img>';
			dealersHand.innerHTML = dealersHand.innerHTML + dealersHitCardHTML;
			dealersCardValues.push(dealersHitCard.value)
			dealerPointValue = checkHandValue(dealersCardValues);
			dealerPoints.innerText = dealerPointValue;
		}

		if (dealerPointValue > 21) {
		setTimeout(function(){
			// displayAlert();
			// alert('You win! Dealer busted.');
			swal("You win!", "The dealer busted with " + dealerPointValue + " points", "success");
			
		}, 500);
		} else if (dealerPointValue < playerPointValue) {
			setTimeout(function(){
				// displayAlert();
				// alert('You win!');
				swal("You win!", "Your points: " + playerPointValue + ",     " + "Dealer Points: " + dealerPointValue, "success");
			}, 500);
		} else if (dealerPointValue == playerPointValue) {
			setTimeout(function(){
				// alert("It's a tie.");
				swal("It's a tie.", "Your points: " + playerPointValue + ",     " + "Dealer Points: " + dealerPointValue, "warning");
			}, 500);
		} else if(dealerPointValue > playerPointValue) {
			setTimeout(function(){
				// alert('You lose.');
				swal("You Lose!", "Your points: " + playerPointValue + ",     " + "Dealer Points: " + dealerPointValue, "error");
			}, 500);
		}
	}
	limitInputs = true;
});

