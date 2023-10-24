const apikey = "0615a8157e48ccbd376cb7b688e84e51";

const fromEl = document.querySelector("form");

const getvale = document.querySelector(".inputt");

var info = document.querySelector(".inform");

var descri = document.querySelector("h2");
  
var img = document.querySelector(".img");
  
var elm1 = document.querySelector(".elm1");
    
var elm2= document.querySelector(".elm2");
    
var elm3 = document.querySelector(".elm3");
 
fromEl.addEventListener("click", (e)=>{
  e.preventDefault();
  const cityvalu =getvale.value.split(' ').join('');
  
  getallinformation (cityvalu);
  
  
 
});


async function getallinformation(cityvalu){
  try {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalu}&appid=${apikey}&units=metric`)
  if(!response.ok) {
    
    throw new err("network is not ok")
    
  }
  const data = await response.json()
  console.log(data);
  
  const icon = data.weather[0].icon;
  const temperature = Math.round(data.main.temp)
  const description = data.weather[0].description;
  const feel =data.main.feels_like;
  const human =data.main.humidity;
  const weed = data.wind.speed;
  
  
  img.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather picture">`;
  info.innerHTML=`${temperature}°C`;
  descri.textContent= description;
  
  elm1.innerHTML=`Feels like:${feel}`
  elm2.innerHTML=`Humidity:
  ${human}%`
  elm3.innerHTML=`wind speed:${weed}
  m/s`
  
  
  }
  catch(err){
    
    
    
  }
} 
