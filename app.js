const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=28.375694&lon=79.435959';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d770fe774mshbc718d53c1c1198p123961jsn3dc5e8da8fc4',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};


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
	wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

  })
  .catch(err => console.error(err));