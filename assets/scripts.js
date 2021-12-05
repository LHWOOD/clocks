const timely = document.querySelector("#time");

function getTime() {
  let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  let blah = document.createElement("h1");
  blah.textContent = now;
  timely.appendChild(blah);
}

getTime();

function getWeather() {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?zip=80127&units=imperial&appid=74f3ae2f827155ea451bd2e9b7cacb93";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var tura = document.createElement("h5");
      tura.textContent =
        "The temperature is currently" + data.main.temp + " °F";
      timely.appendChild(tura);
    });
}

getWeather();
