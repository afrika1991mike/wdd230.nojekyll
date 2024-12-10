document.addEventListener('DOMContentLoaded', () => {
    // Create required variables for the URL
    const myKey = "364388730ad2fa169fb6dda04a49464a";
    const myLat = "-1.9071159732576588";
    const myLong = "30.099755401583714";
    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;

    // Select DOM elements
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc = document.querySelector("figcaption");
    const forecastCont = document.querySelector(".forecast");
    const windSpeed = document.querySelector("#wind-speed");

    // Fetch data from APIs
    async function apiFetch(url, type) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                if (type === "current") {
                    displayResults(data);
                } else if (type === "forecast") {
                    displayForecast(data);
                }
            } else {
                throw new Error(`Failed to fetch data: ${await response.text()}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Display current weather data
    function displayResults(data) {
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const desc = data.weather[0].description;
        const temp = `${data.main.temp.toFixed(0)} °F`;
        const wind = data.wind.speed;

        currentTemp.innerHTML = temp;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = desc;

        windSpeed.textContent = `${wind} mph`;
        calculateWindchill(data.main.temp, wind);
    }

    // Display 4-day weather forecast
    function displayForecast(data) {
        const uniqueDays = [];
        forecastCont.innerHTML = ""; // Clear existing forecast content

        data.list.forEach((forecast) => {
            const date = new Date(forecast.dt * 1000);
            const day = date.toDateString();

            if (!uniqueDays.includes(day) && uniqueDays.length < 4) {
                uniqueDays.push(day);

                const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                const container = document.createElement("div");
                const dateElement = document.createElement("span");
                const tempElement = document.createElement("span");
                const iconWeather = document.createElement("img");

                dateElement.textContent = date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
                tempElement.innerHTML = `${forecast.main.temp.toFixed(1)} °F - ${forecast.weather[0].description}`;
                iconWeather.setAttribute("src", iconsrc);
                iconWeather.setAttribute("alt", forecast.weather[0].description);

                container.appendChild(dateElement);
                container.appendChild(iconWeather);
                container.appendChild(tempElement);
                forecastCont.appendChild(container);
            }
        });
    }

    // Fetch and display data
    apiFetch(urlCurrent, "current");
    apiFetch(urlForecast, "forecast");
});
