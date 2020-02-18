//API keys
//like below, but without the brackets
//https://domainName.com?[key]=[value]
//52c75dcfbca249c25a8e036464811e33
//json.list[0].main.temp

let myApiKey = '52c75dcfbca249c25a8e036464811e33';
let url = `https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=52c75dcfbca249c25a8e036464811e33`;

function KtoF(tempK) {
	return (tempK - 273.15) * (9 / 5) + 32;
}

let windDirection = '';
function degreesToDirection(degrees) {
	if (degrees <= 11.25) {
		windDirection = 'N';
	} else if (degrees <= 33.75) {
		windDirection = 'NNW';
	} else if (degrees <= 56.25) {
		windDirection = 'NW';
	} else if (degrees <= 78.75) {
		windDirection = 'WNW';
	} else if (degrees <= 101.25) {
		windDirection = 'W';
	} else if (degrees <= 123.75) {
		windDirection = 'WSW';
	} else if (degrees <= 146.25) {
		windDirection = 'SW';
	} else if (degrees <= 168.75) {
		windDirection = 'SSW';
	} else if (degrees <= 191.25) {
		windDirection = 'S';
	} else if (degrees <= 213.75) {
		windDirection = 'SSE';
	} else if (degrees <= 236.25) {
		windDirection = 'SE';
	} else if (degrees <= 258.75) {
		windDirection = 'ESE';
	} else if (degrees <= 281.25) {
		windDirection = 'E';
	} else if (degrees <= 303.75) {
		windDirection = 'ENE';
	} else if (degrees <= 326.25) {
		windDirection = 'NE';
	} else if (degrees <= 348.75) {
		windDirection = 'NNE';
	} else if (degrees <= 360) {
		windDirection = 'N';
	}
}

$('#addButton').on('click', function(event) {
	let $cityName = $('#citySearchBar').val();
	console.log($cityName);
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${$cityName}&APPID=${myApiKey}`;
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((weatherObj) => {
			console.log(weatherObj);
			// ---------------------------------------------------------------------------------------------------------------------------
			//                                                    Get all the values we need from the weather API
			// ---------------------------------------------------------------------------------------------------------------------------
			let currentTemperature = KtoF(weatherObj.main.temp).toFixed(1);
			// console.log(currentTemperature);
			let highTemperature = KtoF(weatherObj.main.temp_max).toFixed(1);
			let lowTemperature = KtoF(weatherObj.main.temp_min).toFixed(1);
			let realFeel = KtoF(weatherObj.main.feels_like).toFixed(1);
			let humidity = weatherObj.main.humidity;
			let windSpeed = weatherObj.wind.speed;
			let windDirectionDegrees = weatherObj.wind.deg;
			degreesToDirection(windDirectionDegrees); //get a direction from our degrees
			// console.log('current high:' + highTemperature);
			// let currentTemperatureSpan = $('#currentTemp'); //don't really need to make it a variable
			$('#currentTempSpan').text(currentTemperature);
			// currentTemperatureSpan.text(currentTemperature); //this works as well
			// currentTemperatureSpan.html(currentTemperature); //this works as well
			$('#currentHighSpan').text(highTemperature);
			$('#currentLowSpan').text(lowTemperature);
			$('#currentRealFeelSpan').text(realFeel);
			$('#currentHumiditySpan').text(humidity);
			$('#currentWindSpeedSpan').text(windSpeed);
			$('#currentWindDirectionSpan').text(windDirection);

			// ---------------------------------------------------------------------------------------------------------------------------
			//                                                    Populate the array of city names
			// ---------------------------------------------------------------------------------------------------------------------------
			// cityArray = weatherObj.map((city) => {
			//     return city.
			// })
		})
		.catch(function(error) {
			console.log(error);
			alert('City not found, try again');
		});
	// .fail(function() {
	// 	console.log('error');
	// 	alert('City not found, try again');
	// });

	// .then((error) => {
	// 	console.log($cityName);
	// 	alert('City not found, try again');
	// });
});

// fetch('https://jsonplaceholder.typicode.com/comments')
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((jsonArr) => {
// 		// console.log(jsonArr);
// 		// jsonArr.forEach((element) => {
// 		//     console.log(element.email);
// 		// });
// 		let liArray = jsonArr.map((comment) => {
// 			return `<li>${comment.email}</li>`;
// 		});

// 		let ul = document.querySelector('ul');
// 		ul.innerHTML = liArray.join('');
// 	});
