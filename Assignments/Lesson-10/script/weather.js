//APPID = &APPID=a25b3602ce57e18b11c4ed2de661001a
// City Codes = Preston "5604473", Fish Haven "5585010", Soda Springs "5607916"
// URL = https://api.openweathermap.org/data/2.5/ (forecast or weather) ?id=


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
    var url = "https://api.openweathermap.org/data/2.5/weather?id=";

    var weatherRequest = new XMLHttpRequest();
    weatherRequest.open("GET", cityId + units + apiKey + url, true);
    weatherRequest.send();
    weatherRequest.onload = function() {
        var  weatherData= JSON.parse(weatherRequest.responseText);
        state = weatherData.weather.main;
        temp = weatherData.main.temp;
        humid = weatherData;
        rain = weatherData;
        speed = weatherData;
    }

    var tempF= parseInt(document.getElementById("temperature").innerHTML = weatherData.main.temp);
    var speed= parseInt(document.getElementById("speed").innerHTML = weatherData.wind.speed);
    var chills= windChill(tempF, speed);
    document.getElementById("outputdiv").innerHTML= chills.toFixed(1) + '&deg';
    }
    function windChill(tempF, speed)
    {
    var f= 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return(f);
}

function forcastInput(x) {
    var cityId = cityCodes[x];
    var units = "&units=imperial";
    var url = "https://api.openweathermap.org/data/2.5/forecast?id=";

    var weatherRequest = new XMLHttpRequest();
}