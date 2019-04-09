var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/ZMRTZER/ZMRTZER.github.io/master/Assignments/final-project/json/templeschedules.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
request.onload = function() {


    var closureData= JSON.parse(request.responseText);
    console.log(closureData);

    //Logan Closures//
    document.getElementById("Lclosure1").innerHTML = closureData.temples[0].closures[0];
    document.getElementById("Lclosure2").innerHTML = closureData.temples[0].closures[1];
    document.getElementById("Lclosure3").innerHTML = closureData.temples[0].closures[2];
    document.getElementById("Lclosure4").innerHTML = closureData.temples[0].closures[3];
    document.getElementById("Lclosure5").innerHTML = closureData.temples[0].closures[4];
    document.getElementById("Lclosure6").innerHTML = closureData.temples[0].closures[5];
    document.getElementById("Lclosure7").innerHTML = closureData.temples[0].closures[6];
    document.getElementById("Lclosure8").innerHTML = closureData.temples[0].closures[7];
    document.getElementById("Lclosure9").innerHTML = closureData.temples[0].closures[8];

    //AtlantaClosures//
    document.getElementById("Aclosure1").innerHTML = closureData.temples[1].closures[0];
    document.getElementById("Aclosure2").innerHTML = closureData.temples[1].closures[1];
    document.getElementById("Aclosure3").innerHTML = closureData.temples[1].closures[2];
    document.getElementById("Aclosure4").innerHTML = closureData.temples[1].closures[3];
    document.getElementById("Aclosure5").innerHTML = closureData.temples[1].closures[4];
    document.getElementById("Aclosure6").innerHTML = closureData.temples[1].closures[5];
    document.getElementById("Aclosure7").innerHTML = closureData.temples[1].closures[6];
    document.getElementById("Aclosure8").innerHTML = closureData.temples[1].closures[7];

    //London Closures//
    document.getElementById("Eclosure1").innerHTML = closureData.temples[2].closures[0];

    //Salt Lake Closures//
    document.getElementById("Sclosure1").innerHTML = closureData.temples[3].closures[0];
    document.getElementById("Sclosure2").innerHTML = closureData.temples[3].closures[1];
    document.getElementById("Sclosure3").innerHTML = closureData.temples[3].closures[2];
    document.getElementById("Sclosure4").innerHTML = closureData.temples[3].closures[3];
    document.getElementById("Sclosure5").innerHTML = closureData.temples[3].closures[4];
    document.getElementById("Sclosure6").innerHTML = closureData.temples[3].closures[5];
    document.getElementById("Sclosure7").innerHTML = closureData.temples[3].closures[6];
}