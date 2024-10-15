const URL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=f8759bf4ba10c2d60c2ddaa19d91aeb6`;

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
