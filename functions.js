// creating clock function
function clock () {
    const time = document.getElementById("current-time");
   setInterval(() =>{
   const d = new Date();
   time.innerHTML = d.toLocaleTimeString();
   },1000)}
   
//    calling clock function
    clock();
    

    // creating date function
function date(){
    let date = document.getElementsByClassName("calendar-text")[0];
    let m = new Date();
    date.innerHTML = m.toLocaleDateString();}

    // calling date function
     date();