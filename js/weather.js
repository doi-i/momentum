
const API_KEY = "5268d4edc8412c78032c7ddd1f9e4261";




function ongetOk(position){
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then (data => {
       const cityContainer = document.querySelector(".weather span:nth-child(2)");
       const weatherContainer = document.querySelector(".weather span:last-child");
       const nowWeather = data.weather[0].main;
        cityContainer.innerText = `${data.name},`;
       
        if (nowWeather === "Clouds") {
            weatherContainer.innerHTML = ` <i class="fas fa-cloud"></i>`; 
        }else if(nowWeather ==="Mist") {
            weatherContainer.innerHTML = ` <i class="fas fa-cloud-rain"></i>`;
        } else if(nowWeather ==="Claer") {
            weatherContainer.innerHTML = ` <i class="fa-regular fa-sun"></i>`;
        } else if (nowWeather === "Snow") {
            weatherContainer.innerHTML = ` <i class="fa-regular fa-snowflake"></i>`;
        } else if (nowWeather === "Thunderstorm") {
            weatherContainer.innerHTML = ` <i class="fas fa-bolt-lightning"></i>`;
        } else if (nowWeather === "Drizzle") {
            weatherContainer.innerHTML = ` <i class="fas fa-cloud-rain"></i>`;
        } else if (nowWeather === "Rain") {
            weatherContainer.innerHTML = ` <i class="fas fa-cloud-showers-heavy"></i>`;
        } else if (nowWeather === "Atmosphere"){
            weatherContainer.innerHTML = ` <i class="fa-regular fa-sun"></i>`;
                // ${Math.floor(data.main.temp)}℃
        }


    });
}

function ongetError(){
    alert("cannot find you");
}


navigator.geolocation.getCurrentPosition(ongetOk, ongetError);