const apiKey
let weatherRequest = new XMLHttpRequest();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
}