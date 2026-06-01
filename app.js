const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=47.6062&lon=-122.3321';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d770fe774mshbc718d53c1c1198p123961jsn3dc5e8da8fc4',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}