const weatherForm = document.getElementById("weather-form");

const getWeather = async function (event) {
  // this prevents the form submit from trying to go to a backend
  // essentially hijacking the submission so we can use js on it
  event.preventDefault();

  // creates a new FormData object instance
  // the FormData object simply creates a new object, and the properties are the input names of the
  // input fields. And the values are the values of those input fields
  const data = new FormData(event.target);
  //console.log(data);
  const weatherRequest = await fetch("/weather", {
    method: "POST",
    body: data, // at first I was using JSON.stringify(), but that was not giving expected behavior
  });
  // checks if the browser see the redirect response, and if so manually redirects with javascript
  if (weatherRequest.ok) {
    if (weatherRequest.url.endsWith("/weather/info")) {
      console.log("redirect successful");
      // could also have hardcoded '/weather/info' to get the redirect
      window.location.href = weatherRequest.url;
    }
  }
  // const weatherData = await weatherRequest.json();
  // console.log(weatherData);
};

weatherForm.addEventListener("submit", getWeather);
