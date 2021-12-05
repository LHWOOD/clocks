const timely = document.querySelector("#time");

//current time
const clock = moment().format("h:mm a");
let display = document.createElement("p");
display.textContent = clock;
timely.appendChild(display);

//grabs date
function getDate() {
  let now = moment().format("dddd, MMMM Do YYYY");
  let blah = document.createElement("p");
  blah.textContent = "Today is " + now;
  timely.appendChild(blah);
}
getDate();

//gets weather range
function getWeather() {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?zip=80127&units=imperial&appid=74f3ae2f827155ea451bd2e9b7cacb93";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let tura = document.createElement("p");
      tura.textContent =
        "The temperature is currently " +
        data.main.temp +
        " °F with a high of " +
        data.main.temp_max +
        " °F and a low of " +
        data.main.temp_min +
        " °F";
      timely.appendChild(tura);
    });
}
getWeather();
