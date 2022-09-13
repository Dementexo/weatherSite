let themeButton = document.querySelector("#themeButton");
let themeSwitchBackground = document.querySelector(".themeSlider");
let pageBackground = document.querySelector(".siteContainer");
let conditionHeader = document.querySelector(".conditionContainer");
let conditionContainer1 = document.querySelector(".weatherConditionsData1");
let conditionContainer2 = document.querySelector(".weatherConditionsData2");
let conditionCircle = document.querySelector(".cpHolder");
let searchBar1 = document.querySelector("#cityEntry");
let searchBar2 = document.querySelector("#stateEntry");
let searchB = document.querySelector("#searchButton");
let tempSec = document.querySelector(".tempSection");
let windSec = document.querySelector(".windSection");
let weatherSec = document.querySelector(".weatherSection");
let otherSec = document.querySelector(".otherSection");
let containerLogos = document.getElementsByClassName(".secLogo");
let conditionTempCircle = document.querySelector(".tempConditionUpdate");
let tempLAndH = document.querySelector("#tempLowHigh");
let data1 = document.querySelector(".ctData");
let data2 = document.querySelector(".tlData");
let data3 = document.querySelector(".thData");
let currentMode = "dark";

function themeChange(){
    if(currentMode == "dark")
    {
        themeButton.style.marginLeft = "71%";
        currentMode = "white";
        return 0;
    }
    else if(currentMode == "white")
    {
        themeButton.style.marginLeft = "4%";
        currentMode = "dark";
        return 0;
    }
}

themeButton.addEventListener('click', themeChange)