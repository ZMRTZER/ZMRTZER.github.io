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

        document.getElementById("currentState").innerHTML = weatherData[0].description;
        document.getElementById("temperature").innerHTML = weatherData.main.temp;
        document.getElementById("humidity").innerHTML = weatherData.main.humidity;
        document.getElementById("speed").innerHTML = weatherData.wind.speed;
    }

var forecastRequest = new XMLHttpRequest();
    forecastRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a25b3602ce57e18b11c4ed2de661001a&units=imperial' , true);
    forecastRequest.send();
    forecastRequest.onload = function() {

        var  weatherData= JSON.parse(forecastRequest.responseText);
        console.log(weatherData);

        var listDate = [];
        var listTemp = [];
        var listIconCode = [];
        
        for (i = 0; i < weatherData.list.legth; ++i) {
            time = weatherData.list[i].dt_txt;
            if (time.includes("15:00:00")) {

                var date = new Date(weatherData.list[i].dt * 1000);
                var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var weedkay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                var findDate = weekday[date.getDay()] + month[date.getMonth()] + "" + date.getDate();
                listDate.push(findDate);

                var temp = weatherData.list[i].main.temp;
                var temp = Math.round(temp);
                listTemp.push(temp);

                var iconcode = weatherData.list[i].weather["0"].icon;
                var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
                listIconCode.push(icon_path);
            }
            continue;
        }
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];

    document.getElementById('highTemp1').innerHTML = listTemp[0];
    document.getElementById('highTemp2').innerHTML = listTemp[1];
    document.getElementById('highTemp3').innerHTML = listTemp[2];
    document.getElementById('highTemp4').innerHTML = listTemp[3];
    document.getElementById('highTemp5').innerHTML = listTemp[4];
    }
