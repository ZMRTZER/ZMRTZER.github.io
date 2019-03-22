// City Codes: "Preston" : "5604473", "Fish Haven" : "5585010", Soda Springs" : "5607916"
//APPID = &appid=a25b3602ce57e18b11c4ed2de661001a
// URL = https://api.openweathermap.org/data/2.5/ (forecast or weather) ?id=
// units= "&units=imperial"

var weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=a25b3602ce57e18b11c4ed2de661001a&units=imperial' , true);
    weatherRequest.send();
    weatherRequest.onload = function() {

        var  weatherData= JSON.parse(weatherRequest.responseText);
        console.log(weatherData);

        document.getElementById("currentState").innerHTML = weatherData.weather[0].main;
        document.getElementById("temperature").innerHTML = weatherData.main.temp;
        document.getElementById("humidity").innerHTML = weatherData.main.humidity;
        document.getElementById("speed").innerHTML = weatherData.wind.speed;

        var windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);
        windChill = Math.round(windChill);
        document.getElementById("wind").innerHTML = windChill;

        var d = [weatherData.wind.deg];
        var dir = "";

        if ((d >= 337 && d <= 360) || (d >=0 && d <= 22)) {
        dir ="N";
        }
        
        else if (d >= 23 && d <= 67) {
        dir ="NE";
        }
        else if (d >= 68 && d <= 112) {
        dir ="E";
        }
        else if (d >= 113 && d <= 157) {
        dir ="SE";
        }
        else if (d >= 158 && d <= 202) {
        dir ="S";
        }
        else if (d >= 203 && d <= 246) {
        dir ="SW";
        }
        else if (d >= 247 && d <= 290) {
        dir ="W";
        }
        else dir = "NW"  

        document.getElementById("direction").textContent=dir;


    }


