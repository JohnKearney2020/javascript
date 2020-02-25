// var arrayOfCharNames = [];
// var arrayOfCharNamesCount = 0;
// let endLoop = false;

for (let i = 1; i <= 64; i++) {
	fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`)
		.then((response) => {
			return response.json();
		})
		.then((characters_array) => {
			// console.log(characters_array);
			//characters_array is an array of 50 character objects
			// console.log(characters_array);
			for (let each_character_object of Object.keys(characters_array)) {
				//this iterates over each each character objectin the array of character objects
				// console.log(each_character_object, characters_array[each_character_object]); //need brackets since we are using a variable, .movie won't work
				// console.log(characters_array[each_character_object]); //need brackets since we are using a variable
				let charName = characters_array[each_character_object].name;
				let charHouseURL = characters_array[each_character_object].allegiances[0];
				let charHouseName = '';
				if (charHouseURL === undefined) {
					charHouseName = 'none';
					charHouseURL = 'none';
				}
				if (charName.length > 0) {
					//skip unnamed characters
					if (charHouseURL != 'none') {
						fetch(`${charHouseURL}`)
							.then((response) => {
								return response.json();
							})
							.then((house_object) => {
								// console.log(house_object);
								charHouseName = house_object.name;
								let houseRegion = house_object.region;
								let ageOfFounding = house_object.founded;
								let coatOfArms = house_object.coatOfArms;
								if (houseRegion == '') {
									houseRegion = 'Unknown';
								} else if (ageOfFounding == '') {
									ageOfFounding = 'Unkown';
								} else if (coatOfArms == '') {
									coatOfArms = 'Unkown';
								}
								// console.log(charHouseName);
								// console.log(house_object);
								$('#listOfChars').append(
									`<li><strong>Name:</strong> ${charName} <strong> House:</strong> ${charHouseName} <div class="hidden info">
                                    <strong>Region:</strong> ${houseRegion} <strong> Founded:</strong> ${ageOfFounding} <strong>Coat of Arms:</strong> ${coatOfArms}
                                    </div></li>`
								);
							});
					} else {
						$('#listOfChars').append(
							`<li><strong>Name:</strong> ${charName} <strong> House:</strong> ${charHouseName}</li>`
						);
					}
				}
			}
		});
}

//event listener for house info
$('ul').on('click', 'li', function(event) {
// console.log($(this).children('.hidden'));
	$(this).children('.hidden').toggleClass('hidden'); //this looks at the children of the clicked li, and selects the one with class of hidden
});
