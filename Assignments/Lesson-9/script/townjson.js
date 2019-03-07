var header = document.querySelector("section")

var requestURL = "https://zmrtzer.github.io/Assignments/Lesson-9/json/homepage.json";
var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";

request.send();

request.onload = function() {

  var townInfo = request.response;

  showInfo(townInfo);

}

function showInfo(jsonObj) {

  var towns = jsonObj["towns"];

  for(var i = 0; i< towns.length; i++) {
    
    var myArticle = document.createElement("article");
    var myName = document.createElement("h5");
    var myMotto = document.createElement("p");
    var myYear = document.createElement("p");
    var myPopulation = document.createElement("p");
    var myRain = document.createElement("p");
    var myEvent = document.createElement("p");
  
    myName.textcontent = towns[i].name;
    myMotto.textContent = towns[i].motto;
    myYear.textContent = "Year Founded: " + towns[i].yearFounded;
    myPopulation.textContent = "" + towns[i].currentPopulation;
    myRain.textContent = "" + towns[i].averageRainfall;
    myEvent.textContent = "" + towns[i].events;
  
  myArticle.appendChild(myName);
  myArticle.appendChild(myMotto);
  myArticle.appendChild(myYear);
  myArticle.appendChild(myPopulation);
  myArticle.appendChild(myRain);
  myArticle.appendChild(myEvent);
  }
  



}