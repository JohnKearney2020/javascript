
var arrayOfCharNames = [];
var arrayOfCharNamesCount = 0;
let endLoop = false;

for (let i = 1; i <= 64; i++) {
    fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=10`)
        .then((response) => {
            return response.json();      
        })
        .then((characters_array) => { //characters_array is an array of 50 character objects
            // console.log(characters_array);
            for (let each_character_object of Object.keys(characters_array)) { //this iterates over each each character objectin the array of character objects
                // console.log(each_character_object, characters_array[each_character_object]); //need brackets since we are using a variable, .movie won't work
                // console.log(characters_array[each_character_object]); //need brackets since we are using a variable
                let charName = characters_array[each_character_object].name;
                let charHouseURL = characters_array[each_character_object].allegiances[0];
                let charHouseName = '';
                if (charHouseURL === undefined){
                    charHouseName = 'none';
                    charHouseURL = 'none'
                }
                if (charName.length > 0) { //skip unnamed characters
                    if (charHouseURL != 'none'){
                        fetch(`${charHouseURL}`)
                            .then((response) => {
                                return response.json();
                            })  
                            .then((house_object) => {  
                                charHouseName = house_object.name;
                                console.log(charHouseName);
                                $('#listOfChars').append(`<li><strong>Name:</strong> ${charName} <strong> House:</strong> ${charHouseName}</li>`);
                            })
                    } 
                }
            }
        })
}



