function doInputOutput()
{
var tempF= document.getElementById("temperature").value;
var speed= document.getElementById("speed").value;
var chills= windChill(tempF, speed);
document.getElementById("outputdiv").innerHTML= chills.toFixed(1) + '&deg';
}
function windChill(tempF, speed)
{
var f= 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
return(f);
}