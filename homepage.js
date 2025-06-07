console.log("Hello Mustali")
let city = ''
let url1 = ''
let url2 = ''
let data1 = ''
let data2 = ''
document.getElementById('btn2').addEventListener('click', function () 
{
    city = document.getElementById('sec2-t1').value.trim();
    console.log("User entered city:", city);
    url1 = `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`;
    url2 = `https://en.wikipedia.org/api/rest_v1/page/media-list/${city}`
    GetInfo()
    GetImage()
});

async function GetInfo()
{
   let response = await fetch(url1)
   let rawdata1 = await response.json()
   console.log(rawdata1)
   data1 = rawdata1.extract
   console.log(data1)
   document.getElementById('p1').textContent = data1;
}
async function GetImage()
{
  let response = await fetch(url2)
  let rawdata2 = await response.json()
  console.log("Image data")
  console.log(rawdata2.items[0].srcset[0].src)
  data2 = rawdata2.items[0].srcset[0].src
  console.log("Link of the image")
  console.log(data2)
   document.getElementById('img2').src = data2;
}

