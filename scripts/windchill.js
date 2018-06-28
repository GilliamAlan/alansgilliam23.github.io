//Input weather variables from city page data and calculate windchill

var ht = parseFloat(document.getElementById("hightemp").innerHTML);
var lt = parseFloat(document.getElementById("lowtemp").innerHTML);
var s = parseFloat(document.getElementById("windspeed").innerHTML);
var t = (ht + lt) / 2;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

document.getElementById("windchill").innerHTML = f.toFixed(1) + "&deg;";