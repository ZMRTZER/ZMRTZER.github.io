var forecastRequest = new XMLHttpRequest();
    forecastRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=a25b3602ce57e18b11c4ed2de661001a&units=imperial' , true);
    forecastRequest.send();
    forecastRequest.onload = function() {

        var  forecastData= JSON.parse(forecastRequest.responseText);
        console.log(forecastData);

        var listDate = [];
        var listTemp = [];
        var listIcon = [];
        
        for (i = 0; i < forecastData.list.length; ++i) {
            time = forecastData.list[i].dt_txt;
            if (time.includes("18:00:00")) {

                var date = new Date(forecastData.list[i].dt * 1000);
                var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                var findDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + "" + date.getDate();
                listDate.push(findDate);

                var temp = forecastData.list[i].main.temp;
                var temp = Math.round(temp) + "&deg;F";
                listTemp.push(temp);

                var iconcode = forecastData.list[i].weather["0"].icon;
                var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
                listIcon.push(icon_path);
            }
            continue;
        }
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    
    document.getElementById('icon1').src = listIcon[0];
    document.getElementById('icon2').src = listIcon[1];
    document.getElementById('icon3').src = listIcon[2];
    document.getElementById('icon4').src = listIcon[3];
    document.getElementById('icon5').src = listIcon[4];

    document.getElementById('temp1').innerHTML = listTemp[0];
    document.getElementById('temp2').innerHTML = listTemp[1];
    document.getElementById('temp3').innerHTML = listTemp[2];
    document.getElementById('temp4').innerHTML = listTemp[3];
    document.getElementById('temp5').innerHTML = listTemp[4];

}