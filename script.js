async function getWeather() {
  const apiKey = 'Your_API_Key'; // Your actual API key
  let city = document.getElementById('cityInput').value.trim();

  if (!city) {
    document.getElementById('weatherResult').innerText = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("URL being fetched:", url); // Debugging

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById('weatherResult').innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerText = `Error: ${error.message}`;
  }
}