
// Watch out for your closures... You've got a closing brace after the 
// line for 'var = seconds' which is closing your displayTime function
// and causing issues throughout your code

// Pay attention to how you declare variables. not putting the 'const' declarator
// on your variables leaves them mutable and could cause issues
const session          = document.getElementById('session');
const hours            = document.getElementById('hours');
const minutes          = document.getElementById('minutes');
const seconds          = document.getElementById('seconds');
const greeting_message = document.getElementById('greeting-text');
const calendar_text    = document.getElementById('calendar-text');
const clock_text       = document.getElementById('clock');

const nurse_name       = document.getElementById('nurse_name')
const nurse_break      = document.getElementById('nurse_break')
const nurse_code       = document.getElementById('nurse_code')



// Watch out for global scope vs block scope here... You are declaring a function
// that just declares local variables and completes without doing anything

// Displaying live clock on the top of the page
function displayTime() 
 {
      const dateTime = new Date();
      const hours = dateTime.getHours().toString().padStart(2, '0');
      const minutes = dateTime.getMinutes().toString().padStart(2, '0');
      const seconds = dateTime.getSeconds().toString().padStart(2, '0');
      const amOrPm = (hours >= 12) ? 'PM' : 'AM';
      const timeString = hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;
     clock_text.innerHTML = timeString;
 }
 setInterval(displayTime, 1000);

 function displayGreeting() 
 {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    if (hour < 12) {
      greeting = 'Good morning!';
    } else if (hour < 18) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
    greeting_message.innerHTML = greeting;
  }
displayGreeting();

function displayFullDate() 
{
  const now      = new Date();
  const options  = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = now.toLocaleDateString('en-US', options);
  calendar_text.innerHTML = fullDate;
}
displayFullDate();

 // If you are trying to get your functions working but not seeing anything happening
 // you can try invoking the function in a console log to see what it's return is


// Displaying current weather in St. John's

const apiKey = '6709839139cea574a4a89f226865fbd8';

function getWeather() 
{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=St.%20John%27s,CA&units=metric&appid=6709839139cea574a4a89f226865fbd8`)
  .then(response => response.json())
    .then(data => {
      console.log(data);
      const weather = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      };
      displayWeather(weather);
    })
    .catch(error => {
      console.log(error);
    });
}

function displayWeather(weather)
 {
  const cityElement        = document.querySelector('#city');
  const temperatureElement = document.querySelector('#temperature');
  const descriptionElement = document.querySelector('#description');
  const iconElement        = document.querySelector('#icon');
  
  const city    = cityElement.textContent = `${weather.city} weather`;
  const temp    = temperatureElement.textContent = `${weather.temperature} °C`;
  const descrip = descriptionElement.textContent = weather.description;
  const icon    = iconElement.src = `https://openweathermap.org/img/wn/"${weather.icon}".png`;
 }

getWeather();


const newsApiKey = '0ce5a2833c5544a28e948407f3045f95';
const newsElement = document.getElementById('news-text');

function getNews() 
{
  fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${newsApiKey}`)
    .then(response => response.json())
    .then(data => 
    {
      if (!data || !data.articles || data.articles.length === 0) 
      {
        throw new Error('Invalid API response');
      }
      const articles = data.articles;
      const randomIndex = Math.floor(Math.random() * articles.length);
      const news = articles[randomIndex].title;
      console.log(news);
      newsElement.textContent = news;
    })
    .catch(error => {
      console.log(error);
    });
    
}

getNews();
setInterval(getNews, 600000);







