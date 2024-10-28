// Weather Section
const WeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=f8759bf4ba10c2d60c2ddaa19d91aeb6&units=imperial`;

fetch(WeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let WeatherWebsite = jsObject;
    console.log(jsObject);

    let today = document.createElement('section');
    today.className = 'weather-box';

    let city = document.createElement('h3');
    city.textContent = WeatherWebsite.name;
    today.appendChild(city);

    let weather = document.createElement('h2');
    weather.textContent = WeatherWebsite.weather[0].main;
    today.appendChild(weather);

    let holder = document.createElement('div');
    holder.classList.add('holder');
    today.appendChild(holder);

    let img = document.createElement('img');
    img.classList.add('image');
    const icon = WeatherWebsite.weather[0].icon;
    img.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
    holder.appendChild(img);

    let temperature = document.createElement('p');
    temperature.textContent =
      'The Tempature Currently is: ' + WeatherWebsite.main.temp;
    today.appendChild(temperature);

    let feels_like = document.createElement('p');
    feels_like.textContent =
      'The Tempature Feels Like: ' + WeatherWebsite.main.feels_like;
    today.appendChild(feels_like);

    let humidity = document.createElement('p');
    humidity.textContent =
      'The Humidity Currently is: ' + WeatherWebsite.main.humidity + '%';
    today.appendChild(humidity);

    let windDirection = document.createElement('p');
    let degrees = WeatherWebsite.wind.deg;
    let speed = WeatherWebsite.wind.speed;
    let direction;

    if (degrees >= 348.75 || degrees < 11.25) {
      direction = 'North';
    } else if (degrees >= 11.25 && degrees < 33.75) {
      direction = 'North-Northeast';
    } else if (degrees >= 33.75 && degrees < 56.25) {
      direction = 'Northeast';
    } else if (degrees >= 56.25 && degrees < 78.75) {
      direction = 'East-Northeast';
    } else if (degrees >= 78.75 && degrees < 101.25) {
      direction = 'East';
    } else if (degrees >= 101.25 && degrees < 123.75) {
      direction = 'East-Southeast';
    } else if (degrees >= 123.75 && degrees < 146.25) {
      direction = 'Southeast';
    } else if (degrees >= 146.25 && degrees < 168.75) {
      direction = 'South-Southeast';
    } else if (degrees >= 168.75 && degrees < 191.25) {
      direction = 'South';
    } else if (degrees >= 191.25 && degrees < 213.75) {
      direction = 'South-Southwest';
    } else if (degrees >= 213.75 && degrees < 236.25) {
      direction = 'Southwest';
    } else if (degrees >= 236.25 && degrees < 258.75) {
      direction = 'West-Southwest';
    } else if (degrees >= 258.75 && degrees < 281.25) {
      direction = 'West';
    } else if (degrees >= 281.25 && degrees < 303.75) {
      direction = 'West-Northwest';
    } else if (degrees >= 303.75 && degrees < 326.25) {
      direction = 'Northwest';
    } else {
      direction = 'North-Northwest';
    }

    windDirection.textContent =
      'Wind Direction: ' +
      direction +
      ' (' +
      degrees +
      '°) | ' +
      'Speed: ' +
      speed +
      'mph';
    today.appendChild(windDirection);

    document.querySelector('div.weather-box').appendChild(today);
  });
