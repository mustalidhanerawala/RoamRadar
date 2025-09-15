console.log("Hello Mustali")
let city = ''
let url1 = ''
let url2 = ''
let url3 = ''
document.getElementById('btn2').addEventListener('click', function () 
{
    city = document.getElementById('sec2-t1').value.trim();
    console.log("User entered city:", city);
    url1 = `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`;
    url2 = `https://en.wikipedia.org/api/rest_v1/page/media-list/${city}`
    url3 = `https://wttr.in/${city}?format=j1`
    console.log(url3)
    let sec3 = document.getElementById('sec3')
    sec3.style.display = "block";
    let sec4 = document.getElementById('sec4')
    sec4.style.display = "block";
    GetInfo()
    GetImage()
    GetConditionInfo()
    GetTemperatureInfo()
    GetHumidityInfo()
    GetWindSpeedInfo()
    GetAirQualityInfo()
});

async function GetInfo()
{
   let response = await fetch(url1)
   let rawdata1 = await response.json()
   data1 = rawdata1.extract
   document.getElementById('p1').textContent = data1;
}
async function GetImage()
{
  let response = await fetch(url2)
  let rawdata2 = await response.json()
  data2 = rawdata2.items[0].srcset[0].src
  document.getElementById('img2').src = data2;
}
async function GetConditionInfo()
{
   let response = await fetch(url3)
   let rawdata3 = await response.json()
   let condition = rawdata3.current_condition[0].weatherDesc[0].value
   document.getElementById('condition').textContent = condition;
}

async function GetTemperatureInfo()
{
   let response = await fetch(url3)
   let rawdata4 = await response.json()
   let Temperature = rawdata4.current_condition[0].FeelsLikeC
  document.getElementById('Temperature').textContent = Temperature + "°C";
}

async function GetHumidityInfo()
{
   let response = await fetch(url3)
   let rawdata5 = await response.json()
   let Humidity = rawdata5.current_condition[0].humidity 
   document.getElementById('Humidity').textContent = Humidity + "%";
}

async function GetWindSpeedInfo()
{
   let response = await fetch(url3)
   let rawdata6 = await response.json()
   let WindSpeed = rawdata6.current_condition[0].windspeedKmph
   document.getElementById('WindSpeed').textContent = WindSpeed + " km/h";
}

async function GetAirQualityInfo()
{
   let response = await fetch(url3)
   let rawdata7 = await response.json()
   let lat = rawdata7.nearest_area[0].latitude
   let long = rawdata7.nearest_area[0].longitude
   let url4 = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=pm10,pm2_5`
   let response2 = await fetch(url4)
   let rawdata8 = await response2.json()
   let pm10 = rawdata8.hourly.pm2_5[60]
   if(pm10<=12)
   {
    AirQuality = "Good"
   }
    else if(pm10>12 && pm10<=35.4)
   {
       AirQuality = "Moderate"
   }
   else
   {
       AirQuality = "Poor"
   }
   document.getElementById('AirQuality').textContent = AirQuality;
}

