// Declare variables from the html document
const current_time      = document.getElementById('current-time');
const greeting_message = document.getElementsByClassName('greeting-text')[0];
const calendar_display  = document.getElementById("calendar-text");


const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(typeof(hours));

function clock()
{
    let AM_PM;
    
    // hours = updateTime(hours);
    // minutes = updateTime(minutes); 
    // seconds = updateTime(seconds);

    // making the greeting message say "good morning!" from 6am until 1pm

    AM_PM = ( hours >= 12 ) ? "PM" : "AM";
    current_time.innerHTML = `${hours}:${minutes}:${seconds} ${AM_PM}`;

    setTimeout(() => {clock()}, 1000);
}

if ( hours < 12 )
{
    greeting_message.innerHTML = "Good Morning";
}

if( hours >= 12 && hours <= 18 )
{
    greeting_message.innerHTML = "Good Afternoon";
}

if( hours >= 18 && hours <= 24 )
{
    greeting_message.innerHTML = "good evening";
}
// current_value is a number
function updateTime(current_value)
{
    // instead of checking based on numeric value, 
    // we should check based on number of characters
    // ie. instead of 1 < 10 => '01', 
    // if (String(current_value).length < 2 => 01
    if ( current_value < 10 )
    {
        const value = '0' + current_value;
        console.log(typeof(value));
        return value
    } else 
    {
        return current_value;
    }
}

    // creating date function
function updateCalendar()
{
    const new_date = new Date();
    calendar_display.innerHTML = new_date.toLocaleDateString();
    // setTimeout(updateCalendar(), 1000);
}

// calling date function
clock();
updateCalendar();
