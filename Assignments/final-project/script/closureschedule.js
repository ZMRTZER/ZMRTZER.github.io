var requestURL = 'https://zmrtzer.github.io/Assignments/final-project/json/templeschedule.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
request.onload = function() {
  var templeInfo = request.response;
  showInfo(templeInfo);

    var closureData= JSON.parse(request.responseText);
    console.log(closureData);

    document.getElementById("loganClosure").innerHTML = closureData.temples[1].closures;
    document.getElementById("temperature").innerHTML = weatherData.main.temp;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("speed").innerHTML = weatherData.wind.speed;
}