//APPID = &APPID=a25b3602ce57e18b11c4ed2de661001a
// City Codes = Preston "5604473", Fish Haven "5585010", Soda Springs "5607916"
// URL = https://api.openweathermap.org/data/2.5/forecast?id=
//URL Preston Full = https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=a25b3602ce57e18b11c4ed2de661001a&units=imperial

var apiKey = "&APPID=a25b3602ce57e18b11c4ed2de661001a";
var cityCodes = {
    "Preston" : "5604473",
    "Fish Haven" : "5585010",
    "Soda Springs" : "5607916"
};

function weatherInput(x) {
    var state = document.getElementById("current-state");
    var temp = document.getElementById("temperature");
    var humid = document.getElementById("humidity");
    var rain = document.getElementById("precipitation");
    var speed = document.getElementById("speed");

    var cityId = cityCodes[x];
    var units= "&units=imperial";
    var url = "https://api.openweathermap.org/data/2.5/forecast?id=";

    var weatherRequest = new XMLHttpRequest();
    weatherRequest.open("GET", url, true);
    weatherRequest.send();
    weatherRequest.onload = function() {
        var  weatherData= JSON.parse(weatherRequest.responseText);
        state = weatherData.weather.main;
        temp = weatherData.main.temp;
        humid = weatherData;
        rain = weatherData;
        speed = weatherData;
    }
}