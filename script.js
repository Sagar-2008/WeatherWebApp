document.addEventListener("DOMContentLoaded", function () {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
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
        document.getElementById("sunrise").innerHTML = response.sunrise;
        document.getElementById("sunset").innerHTML = response.sunset;

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

  const populateShanghai = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        document.getElementById("shanghai_pct").innerHTML = response.cloud_pct;
        document.getElementById("shanghai_feels_like").innerHTML =
          response.feels_like;
        document.getElementById("shanghai_humidity").innerHTML =
          response.humidity;
        document.getElementById("shanghai_min_temp").innerHTML =
          response.min_temp;
        document.getElementById("shanghai_max_temp").innerHTML =
          response.max_temp;
        document.getElementById("shanghai_sunrise").innerHTML =
          response.sunrise;
        document.getElementById("shanghai_sunset").innerHTML = response.sunset;
        document.getElementById("shanghai_temp").innerHTML = response.temp;
        document.getElementById("shanghai_wind_speed").innerHTML =
          response.wind_speed;
        document.getElementById("shanghai_wind_degrees").innerHTML =
          response.wind_degrees;
      });
  };

  const populateBoston = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        document.getElementById("Boston_pct").innerHTML = response.cloud_pct;
        document.getElementById("Boston_feels_like").innerHTML =
          response.feels_like;
        document.getElementById("Boston_humidity").innerHTML =
          response.humidity;
        document.getElementById("Boston_min_temp").innerHTML =
          response.min_temp;
        document.getElementById("Boston_max_temp").innerHTML =
          response.max_temp;
        document.getElementById("Boston_sunrise").innerHTML = response.sunrise;
        document.getElementById("Boston_sunset").innerHTML = response.sunset;
        document.getElementById("Boston_temp").innerHTML = response.temp;
        document.getElementById("Boston_wind_speed").innerHTML =
          response.wind_speed;
        document.getElementById("Boston_wind_degrees").innerHTML =
          response.wind_degrees;
      });
  };
  const populateLondon = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        document.getElementById("London_pct").innerHTML = response.cloud_pct;
        document.getElementById("London_feels_like").innerHTML =
          response.feels_like;
        document.getElementById("London_humidity").innerHTML =
          response.humidity;
        document.getElementById("London_min_temp").innerHTML =
          response.min_temp;
        document.getElementById("London_max_temp").innerHTML =
          response.max_temp;
        document.getElementById("London_sunrise").innerHTML = response.sunrise;
        document.getElementById("London_sunset").innerHTML = response.sunset;
        document.getElementById("London_temp").innerHTML = response.temp;
        document.getElementById("London_wind_speed").innerHTML =
          response.wind_speed;
        document.getElementById("London_wind_degrees").innerHTML =
          response.wind_degrees;
      });
  };
  const populateNewYork = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New%20York",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        document.getElementById("New_York_pct").innerHTML = response.cloud_pct;
        document.getElementById("New_York_feels_like").innerHTML =
          response.feels_like;
        document.getElementById("New_York_humidity").innerHTML =
          response.humidity;
        document.getElementById("New_York_min_temp").innerHTML =
          response.min_temp;
        document.getElementById("New_York_max_temp").innerHTML =
          response.max_temp;
        document.getElementById("New_York_sunrise").innerHTML =
          response.sunrise;
        document.getElementById("New_York_sunset").innerHTML = response.sunset;
        document.getElementById("New_York_temp").innerHTML = response.temp;
        document.getElementById("New_York_wind_speed").innerHTML =
          response.wind_speed;
        document.getElementById("New_York_wind_degrees").innerHTML =
          response.wind_degrees;
      });
  };
  populateShanghai();
  populateBoston();
  populateLondon();
  populateNewYork();
});
