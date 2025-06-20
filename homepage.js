console.log("Hello Mustali")
let city = ''
let url1 = ''
let url2 = ''
let url3 = ''
let data1 = ''
let data2 = ''
let data3 = ''
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
    GetWeatherInfo()
});

async function GetInfo()
{
   let response = await fetch(url1)
   let rawdata1 = await response.json()
   // console.log(rawdata1)
   data1 = rawdata1.extract
   // console.log(data1)
   document.getElementById('p1').textContent = data1;
}
async function GetImage()
{
  let response = await fetch(url2)
  let rawdata2 = await response.json()
//   console.log(rawdata2.items[0].srcset[0].src)
  data2 = rawdata2.items[0].srcset[0].src
  document.getElementById('img2').src = data2;
}
async function GetWeatherInfo()
{
   let response = await fetch(url3)
   let rawdata3 = await response.json()
   let condition = rawdata3.current_condition[0].weatherDesc[0].value
   document.getElementById('condition').textContent = condition;
}

