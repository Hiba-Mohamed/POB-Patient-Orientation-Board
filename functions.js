
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
function displayTime() 
 {
    var dateTime     = new Date();
    var hours        = dateTime.getHours();
    var minutes      = dateTime.getMinutes();
    var seconds      = dateTime.getSeconds();

    const new_date = new Date();
    clock_text.innerHTML = new_date.toLocaleTimeString();

    // adding zero infront of the numbers below 10
    let current_value
    if (String(current_value).length < 2)
    {
        const value = '0' + current_value;
        console.log(typeof(value));
        return value
    } 
    else 
    {
        return current_value;
    }

    if (hours < 12)
     {
        setAttribute(greeting_message.innerHTML, "good night")
     }

    // // changing the greeeting message with time change
    // if ( hours < 12 )
    // {
    //    
    //     // greeting_message.innerHTML = "Good Morning";
    // }
    
    // if( hours >= 12 && hours <= 18 )
    // {
    //     greeting_message.innerHTML = "Good Afternoon";
    // }
    
    // if( hours >= 18 && hours <= 24 )
    // {
    //     greeting_message.innerHTML = "good evening";
    // }

 }

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
  const AM_PM = ( hours >= 12 ) ? session.innerHTML = "PM": session.innerHTML= "AM";


 // we are delcaring this if statement in the global scope so the return value isn't being stored anywhere
 // This is what is causing your console error for 'Illegal Return Statement"
 //  current_value is a number

//  function updateTime(current_value)
//  {
//     current_value.toString().length <2 ? return "0" + current_value : return current_value;
//  }




     // creating date function



// // Declare variables from the html document
// const current_time      = document.getElementById('current-time');
// const greeting_message = document.getElementsByClassName('greeting-text')[0];
// const calendar_display  = document.getElementById("calendar-text");


// const date = new Date(); 
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// function clock()
// {
//     let AM_PM;
    
//     // hours = updateTime(hours);
//     // minutes = updateTime(minutes); 
//     // seconds = updateTime(seconds);

//     // making the greeting message say "good morning!" from 6am until 1pm

//     AM_PM = ( hours >= 12 ) ? "PM" : "AM";
//     current_time.innerHTML = `${hours}:${minutes}:${seconds} ${AM_PM}`;

//     setInterval(clock, 10);
// }

// if ( hours < 12 )
// {
//     greeting_message.innerHTML = "Good Morning";
// }

// if( hours >= 12 && hours <= 18 )
// {
//     greeting_message.innerHTML = "Good Afternoon";
// }

// if( hours >= 18 && hours <= 24 )
// {
//     greeting_message.innerHTML = "good evening";
// }

// current_value is a number
// function updateTime(current_value)
// {

//      current_value.toString().length <2 ? return "0" + current_value : return current_value;
    
    
// //     // instead of checking based on numeric value, 
// //     // we should check based on number of characters
// //     // ie. instead of 1 < 10 => '01', 
// //     // if (String(current_value).length < 2 => 01
// //     if (String(current_value).length < 2)
// //     {
// //         const value = '0' + current_value;
// //         console.log(typeof(value));
// //         return value
// //     } 
// //     else 
// //     {
// //     //     return current_value;
// //     }

// // }

//     // creating date function
// function updateCalendar()
// {
//     const new_date = new Date();
//     calendar_display.innerHTML = new_date.toLocaleDateString();
//     // setTimeout(updateCalendar(), 1000);
// }

// // calling date function
// clock();
// updateCalendar();
