var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/ZMRTZER/ZMRTZER.github.io/master/Assignments/final-project/json/templeschedules.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
request.onload = function() {


    var closureData= JSON.parse(request.responseText);
    console.log(closureData);

    document.getElementById("loganClosure").innerHTML = closureData.temples[0].closures;
    document.getElementById("atlantaClosure").innerHTML = closureData.temples[1].closures;
    document.getElementById("ghanaClosure").innerHTML = closureData.temples[2].closures;
    document.getElementById("saltlakeClosure").innerHTML = closureData.temples[3].closures;

}