function setup () {
    createCanvas(400, 200);
    loadJSON('https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=a25b3602ce57e18b11c4ed2de661001a&units=imperial', getData)
}

function getData(data) {
println(data);
}