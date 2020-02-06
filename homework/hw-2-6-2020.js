//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                     Medium Problems
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//===================================
//        1 - Postitive numbers
//===================================
// a = [1, 0, 10, -1, 6, -33, -7, 11];
// let posOnly = a.filter(function(each_number){
//     return each_number > 0;
// })
// console.log(posOnly);

//OR-------------------------------------------

// function positiveOnly(numbers) {
//     let onlyPositives = [];
//     for (each_number of numbers) {
//         if (each_number >= 0) {
//             onlyPositives.push(each_number);
//         }
//     }
//     return onlyPositives;
// }
// a = [1, 0, 10, -1, 6, -33, -7, 11];
// console.log(positiveOnly(a));


//===================================
//        2 - Even numbers
//===================================
// a = [1, 0, 10, -1, 6, -33, -7, 11];
// let evensOnly = a.filter(function(each_number){
//     return each_number % 2 == 0;
// })
// console.log(evensOnly);

//OR------------------------------------

// function evensOnly(numbers) {
//     let onlyEvens = [];
//     for (each_number of numbers) {
//         if (each_number % 2 == 0) {
//             onlyEvens.push(each_number);
//         }
//     }
//     return onlyEvens;
// }
// a = [1, 0, 10, -1, 6, -33, -7, 11];
// console.log(evensOnly(a));


//===================================
//        3 - Square the numbers
//===================================
// a = [1, 0, 10, -1, 6, -33, -7, 11];
// let squares = a.map(function(each_number){
//     return each_number * each_number;
// })
// console.log(squares);

//OR---------------------------------------

// function squareTheNum (a) {
//     let squareNumbers = [];
//     for (each_number of a) {
//         squareNumbers.push(Math.pow(each_number, 2)); //(base, exponent)
//     }
//     return squareNumbers;
// }
// a = [1, 0, 10, -1, 6, -33, -7, 11];
// console.log(squareTheNum(a));


//===================================
//        4 - Cities 1
//===================================
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let coolCities = cities.filter(function(each_city){
//     return each_city.temperature < 70;
// })
// console.log(coolCities);

//OR ----------------------------------------------

// function citiesCoolerThan (cities, tempCutoff) {
//     let coolCities = [];
//     for (each_dictionary of cities){ //this will look at each individual dictionary in cities
//         let cityName = each_dictionary['name']; //this will get the name of the city
//         let cityTemp = each_dictionary['temperature']; //this will get the temperature of the city
//         if (cityTemp < tempCutoff) {
//             coolCities.push(cityName);
//         }
//     }
//     return coolCities;
// }
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];
// console.log(citiesCoolerThan(cities, 70));


//===================================
//        5 - Cities 2
//===================================
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let cityNames = cities.map(function(each_city){
//     return each_city.name;
// })
// console.log(cityNames);

//OR --------------------------------------


// function cityNames (cities) {
//     let arrayOfCityNames = [];
//     for (each_dictionary of cities){ //this will look at each individual dictionary in cities
//         let cityName = each_dictionary['name']; //this will get the name of the city
//         arrayOfCityNames.push(cityName);
//     }
//     return arrayOfCityNames;
// }
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];
// console.log(cityNames(cities));


//===================================
//        6 - Good Job!
//===================================
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// let hellos = people.map(function(each_name){
//     return 'Good Job, ' + each_name + '!';
// })
// console.log(hellos);


//OR -------------------------------

// function sayHello(listOfPeople) {
//     for (each_name of listOfPeople) {
//         console.log('Good job, ' + each_name + '!');
//     }
// }
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// sayHello(people);



//===================================
//        7 - Sort an Array
//===================================
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// console.log(people.sort());


//===================================
//        8 - Sort an Array 2
//===================================
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function sortNamesByLength (names) {
    sortedNames = '';
    count = 0;
    for (each_name of people) {  //loop thru our list of people's names one at a time
        count++; 
        let tempArrayOfPeople = people.filter(function(each_name){
            return each_name.length == count;
        }) //this holds all names of length 1, then all names of length 2, etc. etc. with each loop
        if (tempArrayOfPeople.length > 0) { //we skip the lengths not present in our array of names
            sortedNames += tempArrayOfPeople.join(); //we turn our temp array of names into a string and add it to our sorted names string
            sortedNames += ','; //we have to add this to the last name in the string each loop so it is seperated properly from the first name of the next loop
        }
    }
    sortedNames = sortedNames.split(','); //we turn our string of names back into an array, seperated by commas
    sortedNames.pop(); //we remove the last element since will always be blank using this function b/c of us adding a ',' to the last name earlier.
    return sortedNames;
}
// console.log(sortNamesByLength(people));

//OR ----------------------------------------------------------

let method2 = people.sort(function(a, b){return a-b});
console.log(method2);