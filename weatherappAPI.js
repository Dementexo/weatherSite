let searchButton = document.getElementById('searchButton');

function dataFetch(){
    let userCity = document.getElementById('cityEntry').value;
    let userState = document.getElementById('stateEntry').value;
    let apiKey = "160216139985f28ea2489dfd2c4ec5b4";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "," + userState + "&appid=" + apiKey + "&units=imperial")
        .then((response) => response.json())
        .then((data) => displayWeather(data));
}
function displayWeather(data){
    let weatherID = data.weather[0].id;
    let conditionIcon = data.weather[0].icon;
    let currentCondition = data.weather[0].main;
    let locationLat = data.coord.lat;
    let locationLon = data.coord.lon;
    let currentTemp = data.main.temp; 
    let tempMin = data.main.temp_min;
    let tempMax = data.main.temp_max;
    let windSpeed = data.wind.speed;
    let windDegree = data.wind.deg;
    let visibility = data.visibility;
    let conditionDescription = data.weather[0].description;
    let rainConditions = 0;
    let cloudiness = data.clouds.all;
    let humidity = data.main.humidity;
    let airPressure = data.main.pressure;
    let country = data.sys.country;
    let wcd1 = document.querySelector(".weatherConditionsData1");
    let wcd2 = document.querySelector(".weatherConditionsData2");
    if (weatherID < 532){
        rainConditions = data.rain["1h"];
    }
    document.querySelector("#conditionPicSRC").src = "https://openweathermap.org/img/wn/" + conditionIcon + ".png";
    document.querySelector("#conditionPicSRC").style.visibility = "visible";
    document.querySelector("#tcpSRC").src = "https://openweathermap.org/img/wn/" + conditionIcon + ".png";
    document.querySelector("#tcpSRC").style.visibility = "visible";
    wcd1.innerHTML = currentCondition;
    wcd2.innerHTML = "Long: " + locationLon + " Lat: " + locationLat;
    wcd1.style.width = "fit-content";
    wcd2.style.width = "fit-content";
    document.querySelector(".ctData").innerHTML = currentTemp + "°F";
    document.querySelector(".tlData").innerHTML = tempMin + "°F";
    document.querySelector(".thData").innerHTML = tempMax + "°F";
    document.querySelector(".wsValue").innerHTML = windSpeed + "mph";
    document.querySelector(".wdValue").innerHTML = windDegree + "°";
    document.querySelector(".wvValue").innerHTML = visibility + "km";
    document.querySelector(".cdValue").innerHTML = conditionDescription;
    document.querySelector(".rvValue").innerHTML = rainConditions + "mm";
    document.querySelector(".cpValue").innerHTML = cloudiness + "%";
    document.querySelector(".hdValue").innerHTML = humidity + "%";
    document.querySelector(".pdValue").innerHTML = + airPressure;
    document.querySelector(".cValue").innerHTML = country;
    if (currentTemp >= 70){
        document.querySelector(".tempConditionUpdate").style.backgroundColor = "rgb(255, 140, 0, 0.6)";
    }
    else if(currentTemp < 70 && currentTemp > 55){
        document.querySelector(".tempConditionUpdate").style.backgroundColor = "rgb(100, 149, 237, 0.6)";
    }
    else if(currentTemp < 55){
        document.querySelector(".tempConditionUpdate").style.backgroundColor = "rgb(0, 191, 255, 0.6)";
    }
}

searchButton.addEventListener('click', dataFetch);