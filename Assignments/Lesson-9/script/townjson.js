var figcaption = document.querySelector("figcaption");

var requestURL = "https://ZMRTZER.github.io/Assignments/Lesson-9/json/homepage.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = "json";

request.send();


request.onload = function() {

    var townInfo = request.response;
  
    populateFigcaption(townInfo);
  
    showInfo(townInfo);
  
  }


  function populateFigcaption(jsonObj) {

    var myH1 = document.createElement("h1");
  
    myH1.textContent = jsonObj["name"];
  
    figcaption.appendChild(myH1);
  
  
  
    var myPara = document.createElement('em');
  
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  
    header.appendChild(myPara);
  
  
  
  }