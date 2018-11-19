var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','https://api.openweathermap.org/data/2.5/weather?id=5061036&appid=e43a416161b5936eff23bffd9f2092ae&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('current').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('headercurrent').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('currenttemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currenttemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('icon').innerHTML = weatherInfo.weather[0].icon;
}

var weatherForecast = new XMLHttpRequest();
weatherForecast.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=5061036&appid=e43a416161b5936eff23bffd9f2092ae&units=imperial',true);

weatherForecast.send();

weatherForecast.onload = function() {
    var weatherInfoForecast = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfoForecast);

    document.getElementById('wed').innerHTML = weatherInfoForecast.list[0].main.temp_max;
    document.getElementById('thu').innerHTML = weatherInfoForecast.list[1].main.temp_max;
    document.getElementById('fri').innerHTML = weatherInfoForecast.list[2].main.temp_max;
    document.getElementById('sat').innerHTML = weatherInfoForecast.list[3].main.temp_max;
    document.getElementById('sun').innerHTML = weatherInfoForecast.list[4].main.temp_max;

}
