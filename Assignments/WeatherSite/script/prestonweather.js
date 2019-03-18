// City Codes: "Preston" : "5604473", "Fish Haven" : "5585010", Soda Springs" : "5607916"
//APPID = &appid=a25b3602ce57e18b11c4ed2de661001a
// URL = https://api.openweathermap.org/data/2.5/ (forecast or weather) ?id=
// units= "&units=imperial"

var weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a25b3602ce57e18b11c4ed2de661001a&units=imperial' , true);
    weatherRequest.send();
    weatherRequest.onload = function() {

        var  weatherData= JSON.parse(weatherRequest.responseText);
        console.log(weatherData);

        document.getElementById("currentState").innerHTML = weatherData.weather[0].main;
        document.getElementById("temperature").innerHTML = weatherData.main.temp;
        document.getElementById("humidity").innerHTML = weatherData.main.humidity;
        document.getElementById("speed").innerHTML = weatherData.wind.speed;
    }


