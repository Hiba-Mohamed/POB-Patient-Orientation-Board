
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
    var dateTime     = new Date();
    var hours        = dateTime.getHours();
    var minutes      = dateTime.getMinutes();
    var seconds      = dateTime.getSeconds();

    function liveClock ()
     {
        const new_date = new Date();
        clock_text.innerHTML = new_date.toLocaleTimeString();
     }
     setInterval(liveClock, 1000);

    //  AM and PM
    const AM_PM = ( hours >= 12 ) ? session.innerHTML = "PM": session.innerHTML= "AM";          
 }

 // adding zero infront of the numbers below 10
 const string        = String(hours).length ;
 const leftHourZero  = document.getElementById('hours').innerHTML = `"0" ${hours}`;
 const noZeroHour    = document.getElementById('hours').innerHTML = `${hours}`;         
 const leftZeroHours = (string < 2)   ?  leftHourZero : noZeroHour;

//  calling the displayTime function
 displayTime();

 function updateCalendar()
{
    const new_date = new Date();
    calendar_text.innerHTML = new_date.toLocaleDateString();
}

// calling date function

updateCalendar();

 // If you are trying to get your functions working but not seeing anything happening
 // you can try invoking the function in a console log to see what it's return is

//  console.log(displayTime())
// In this case, the function isn't doing any work or modifying the DOM in any way

// Again, watch out for how you are declaring variables here.. This may work fine but it is bad practice
// We should always explicitly define wether a variable is mutable (let) or immutable (const)
  


 // we are delcaring this if statement in the global scope so the return value isn't being stored anywhere
 // This is what is causing your console error for 'Illegal Return Statement"
