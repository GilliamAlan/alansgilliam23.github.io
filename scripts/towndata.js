var townObject = new XMLHttpRequest();
townObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json',true);

townObject.send();

townObject.onload = function() {
    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);

    document.getElementById('pmotto').innerHTML = townInfo.towns[4].motto;
    document.getElementById('pyear').innerHTML = townInfo.towns[4].yearFounded;
    document.getElementById('ppopulation').innerHTML = townInfo.towns[4].currentPopulation;
    document.getElementById('prainfall').innerHTML = townInfo.towns[4].averageRainfall;

    document.getElementById('smotto').innerHTML = townInfo.towns[5].motto;
    document.getElementById('syear').innerHTML = townInfo.towns[5].yearFounded;
    document.getElementById('spopulation').innerHTML = townInfo.towns[5].currentPopulation;
    document.getElementById('srainfall').innerHTML = townInfo.towns[5].averageRainfall;

    document.getElementById('fmotto').innerHTML = townInfo.towns[1].motto;
    document.getElementById('fyear').innerHTML = townInfo.towns[1].yearFounded;
    document.getElementById('fpopulation').innerHTML = townInfo.towns[1].currentPopulation;
    document.getElementById('frainfall').innerHTML = townInfo.towns[1].averageRainfall;
}