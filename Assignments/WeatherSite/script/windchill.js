function doInputOutput()
{
var tempF= parseInt(document.getElementById("temperature").innerHTML);
var speed= parseInt(document.getElementById("speed").innerHTML);
var chills= windChill(tempF, speed);
document.getElementById("outputdiv").innerHTML = chills.toFixed(0) + '&deg';
}
function windChill(tempF, speed)
{
var f= 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
return(f);
}