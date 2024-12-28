const searchBtn = document.getElementById("searchbtn");
const searchInput = document.querySelector(".search-bar");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const locationElement = document.querySelector(".location");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather(city) {
    const apiKey = '41d48be347f728798a24815d956a6454';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const weatherData = await fetch(url).then(response => response.json());
    console.log(weatherData)
    temperature.innerHTML = `${Math.round(weatherData.main.temp-273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `Humidity:${weatherData.main.humidity}%`;
    wind.innerHTML = `Wind:${weatherData.wind.speed}Km/H`
    locationElement.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    switch (weatherData.weather[0].main) {
        case 'Clear':
            weatherImg.src = './assets/clear.png';
            break;
        case 'Clouds':
            weatherImg.src = './assets/cloud.png';
            break;
        case 'Mist':
            weatherImg.src = './assets/mist.png';
            break;
        case 'Rain':
            weatherImg.src = './assets/rain.png';
            break;
        case 'snow':
            weatherImg.src = './assets/snow.png';
            break;
       
    
}

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
});