// function displayTimer() {
//     document.getElementById("time").innerHTML="";
//     document.getElementById("time").innerHTML=new Date().toLocaleTimeString();
//}
let displayTimer=()=>{
       document.getElementById("time").innerHTML="";
    document.getElementById("time").innerHTML=new Date().toLocaleTimeString();
 
}

// display greeting every 3 seconds
setInterval(displayTimer, 1000); 