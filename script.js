document.addEventListener("DOMContentLoaded", function () {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getWeather = (city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
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
        document.getElementById("sunrise").innerHTML = formatTime(
          response.sunrise
        );
        document.getElementById("sunset").innerHTML = formatTime(
          response.sunset
        );

        document.querySelectorAll(".card").forEach(function (card) {
          card.classList.add("loaded");
        });
      })
      .catch((err) => console.error(err));
  };

  const submit = document.getElementById("submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city").value;
    getWeather(cityInput);
  });

  getWeather("Delhi");

  const populateCity = (city) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const prefix = city.replace(/\s+/g, "_"); // Convert spaces to underscores for IDs
        document.getElementById(`${prefix}_pct`).innerHTML = response.cloud_pct;
        document.getElementById(`${prefix}_feels_like`).innerHTML =
          response.feels_like;
        document.getElementById(`${prefix}_humidity`).innerHTML =
          response.humidity;
        document.getElementById(`${prefix}_min_temp`).innerHTML =
          response.min_temp;
        document.getElementById(`${prefix}_max_temp`).innerHTML =
          response.max_temp;
        document.getElementById(`${prefix}_sunrise`).innerHTML = formatTime(
          response.sunrise
        );
        document.getElementById(`${prefix}_sunset`).innerHTML = formatTime(
          response.sunset
        );
        document.getElementById(`${prefix}_temp`).innerHTML = response.temp;
        document.getElementById(`${prefix}_wind_speed`).innerHTML =
          response.wind_speed;
        document.getElementById(`${prefix}_wind_degrees`).innerHTML =
          response.wind_degrees;
      });
  };

  populateCity("Shanghai");
  populateCity("Boston");
  populateCity("London");
  populateCity("New York");
});
