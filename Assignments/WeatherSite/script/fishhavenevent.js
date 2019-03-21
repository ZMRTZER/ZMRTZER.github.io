var main = document.getElementById('events');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townInfo = request.response;


 events(townInfo);


function events(townInfo) {
  var townEvents = townInfo["towns"];
  for (var i = 0; i < townEvents.length; i++) {
    if (townEvents[i].name === "Fish Haven") {
      var article = document.createElement('article');
      var list = document.createElement("ul");
      var eventList = townEvents[i].events;

      for (var x = 0; x < eventList.length; x++){
        var listItem = document.createElement ("li");
        listItem.textContent = eventList[x];
        list.appendChild(listItem);
      }
      article.appendChild(list);
      main.appendChild(article);
    }
  }
}
}