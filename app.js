let apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=42.47&longitude=-70.95&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m&temperature_unit=fahrenheit&windspeed_unit=mph"

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }