// JavaScript Document
var high = 90;
var low = 66;
var windSpeed = 5;


var avereageTemp = ((high - low) / 2) + low;
var windChill = 35.74 + 0.6215 * avereageTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * avereageTemp * Math.pow(windSpeed, 0.16);

windChill = Math.round(windChill) + "&deg;F";

document.getElementById("windChill").innerHTML = windChill;