const apiKey = "41336780c1464098e2b290b9693e825b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bengaluru";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}