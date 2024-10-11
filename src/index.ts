// Fetch is a function we can call. We pass in a url or address to a server or to a file path
// Fetch return a promise

//Add an input to the page that the user type a city into
//When they submit or hit a button, you should grab the city they type and make a request to the weather api to get the current weather by that city name.

//once oyu have the weather data, ou tput the current temp, wind speed, and humidity for that city
const cityForm 


function outputWeatherData(weatherData){
    const tempOutput = document.querySelector<HTMLElement>('#temp');
    const windOutput = document.querySelector<HTMLElement>('#wind');
    const humidityOutput = document.querySelector<HTMLElement>('#humidity');

    tempOutput.innerHTML = `Temp: ${Math.round(weatherData.main.temp)}&deg`;
    
}

async function getWeatherData(eventObj) {
    eventObj.preventDefault();

    const cityInput = document.querySelector('#city-input')


const apiKey = '50f11befe9053ee3292493b979ea6618';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=New Jersey&units=imperial&appid=' + apiKey;

const resObject = await fetch(url);
const data = await resObject.json();

outputWeatherData(data);
}

getWeatherData()

cityForm.addEventListener('submit', getWeatherData)
// async function getStarwarsData(){
//     const resOject = await fetch('https://swapi.dev/api/people/');
//     const data = await resOject.json();

// console.log(data)

// apiPromise.then((responseObj) => {
//     const dataPromise = responseObj.json();

//     dataPromise.then((data) => {
//         console.log(data.results[3]);
//     })
// });
}

document.addEventListener('submit',)