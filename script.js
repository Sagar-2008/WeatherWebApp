document.addEventListener("DOMContentLoaded", function () {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "2c9822633amsh8885e2943df8bcfp1a7677jsn2ce724667c69",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getWeatherByCoords = (lat, lon, city = "Selected Location") => {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${lat}&lon=${lon}`, options)
      .then((response) => response.json())
      .then((response) => {
        document.getElementById("cityName").innerHTML = city;
        document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
        document.getElementById("temp").innerHTML = response.temp;
        document.getElementById("temp2").innerHTML = response.temp;
        document.getElementById("feels_like").innerHTML = response.feels_like;
        document.getElementById("humidity").innerHTML = response.humidity;
        document.getElementById("humidity2").innerHTML = response.humidity;
        document.getElementById("min_temp").innerHTML = response.min_temp;
        document.getElementById("max_temp").innerHTML = response.max_temp;
        document.getElementById("wind_speed").innerHTML = response.wind_speed;
        document.getElementById("wind_speed2").innerHTML = response.wind_speed;
        document.getElementById("sunrise").innerHTML = formatTime(response.sunrise);
        document.getElementById("sunset").innerHTML = formatTime(response.sunset);
      })
      .catch((err) => console.error(err));
  };

  const getCoordsFromCity = (city) => {
    return fetch(`https://geocode.maps.co/search?q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return {
            lat: data[0].lat,
            lon: data[0].lon,
          };
        } else {
          throw new Error("City not found.");
        }
      });
  };

  const submit = document.getElementById("submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city").value.trim();
    if (!cityInput) return;

    getCoordsFromCity(cityInput)
      .then(({ lat, lon }) => getWeatherByCoords(lat, lon, cityInput))
      .catch((err) => {
        console.error(err);
        alert("Could not find the city. Please try again.");
      });
  });

  // Default city (London)
  getWeatherByCoords(51.5072, -0.1276, "London");

  // Predefined cities for the table
  const predefinedCities = {
    "Shanghai": { lat: 31.2304, lon: 121.4737 },
    "Boston": { lat: 42.3601, lon: -71.0589 },
    "London": { lat: 51.5072, lon: -0.1276 },
    "New York": { lat: 40.7128, lon: -74.0060 },
  };

  const populateCity = (city, coords) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${coords.lat}&lon=${coords.lon}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const prefix = city.replace(/\s+/g, "_"); // For ID matching
        document.getElementById(`${prefix}_pct`).innerHTML = response.cloud_pct;
        document.getElementById(`${prefix}_feels_like`).innerHTML = response.feels_like;
        document.getElementById(`${prefix}_humidity`).innerHTML = response.humidity;
        document.getElementById(`${prefix}_min_temp`).innerHTML = response.min_temp;
        document.getElementById(`${prefix}_max_temp`).innerHTML = response.max_temp;
        document.getElementById(`${prefix}_sunrise`).innerHTML = formatTime(response.sunrise);
        document.getElementById(`${prefix}_sunset`).innerHTML = formatTime(response.sunset);
        document.getElementById(`${prefix}_temp`).innerHTML = response.temp;
        document.getElementById(`${prefix}_wind_speed`).innerHTML = response.wind_speed;
        document.getElementById(`${prefix}_wind_degrees`).innerHTML = response.wind_degrees;
      })
      .catch((err) => console.error(err));
  };

  // Populate the table with predefined cities
  Object.entries(predefinedCities).forEach(([city, coords]) => {
    populateCity(city, coords);
  });
});
