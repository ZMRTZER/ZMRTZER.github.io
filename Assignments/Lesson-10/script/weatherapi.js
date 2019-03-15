//APPID = &APPID=a25b3602ce57e18b11c4ed2de661001a
// City Codes = Preston "5604473", Fish Haven "5585010", Soda Springs "5607916"
// URL = https://api.openweathermap.org/data/2.5/weather?id=

var weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a25b3602ce57e18b11c4ed2de661001a&units=imperial' , true);
    weatherRequest.send();
    weatherRequest.onload = function() {

        var  weatherData= JSON.parse(weatherRequest.responseText);
        console.log(weatherData);

        document.getElementById("current-temp").innerHTML = weatherData.main.temp;

    }
