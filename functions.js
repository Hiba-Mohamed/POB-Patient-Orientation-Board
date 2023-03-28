function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
    
     hours = updateTime(hours);
     minutes = updateTime(minutes); 
     seconds = updateTime(seconds);

// making the greeting message say "good morning!" from 6am until 1pm
 midday = (hours >=12) ?"PM" : "AM";
 document.getElementById("current-time").innerHTML = hours + ":" + minutes + ":" + seconds + midday
var time = setTimeout(function(){
    clock();
}, 1000);
}
  if( hours < 12)  {
      var greeting = "Good Morning";
  }
   if(hours >+ 12 && hours <=18)  {
       var greeting = "Good Afternoon";
       
    if(hours >= 18 && hours <= 24){
     var greeting = "good evening";
        }
}
function updateTime(k){
    if(k <10){
        return "0" + k
    } else {
        return k;
    }
}

clock();

    // creating date function
function date(){
    let date = document.getElementsByClassName("calendar-text")[0];
    let m = new Date();
    date.innerHTML = m.toLocaleDateString();}

    // calling date function
     date();

    //  getting the name of the day of the week displayed in the date


    // getting the name of the month of the year displayed in the date


 