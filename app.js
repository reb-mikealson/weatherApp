const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=47.6062&lon=-122.3321';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d770fe774mshbc718d53c1c1198p123961jsn3dc5e8da8fc4',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};
const cloud_pct = document.getElementById("cloud_pct");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");


	fetch(url, options)
  .then(response => response.json())
  .then(response => {

    console.log(response);

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

  })
  .catch(err => console.error(err));