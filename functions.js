
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


// Watch out for global scope vs block scope here... You are declaring a function
// that just declares local variables and completes without doing anything

// Displaying live clock on the top of the page
function displayTime() 
 {
      var dateTime = new Date();
      var hours = dateTime.getHours().toString().padStart(2, '0');
      var minutes = dateTime.getMinutes().toString().padStart(2, '0');
      var seconds = dateTime.getSeconds().toString().padStart(2, '0');
      var amOrPm = (hours >= 12) ? 'PM' : 'AM';
      var timeString = hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;
     clock_text.innerHTML = timeString;
 }
 setInterval(displayTime, 1000);

 function displayGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = '';
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

function displayFullDate() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var fullDate = now.toLocaleDateString('en-US', options);
  calendar_text.innerHTML = fullDate;
}
displayFullDate();

 // If you are trying to get your functions working but not seeing anything happening
 // you can try invoking the function in a console log to see what it's return is
