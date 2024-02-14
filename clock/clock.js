let Hours = document.getElementById('Hours');
let Minutes = document.getElementById('Min');
let  Seconds = document.getElementById('Sec');



setInterval(()=>{
    let currentTime = new  Date();
  
    Hours.innerHTML = (currentTime.getHours()<10? "0":"") + currentTime.getHours();
    Minutes.innerHTML = (currentTime.getMinutes()<10? "0":"") + currentTime.getMinutes();
    Seconds.innerHTML = (currentTime.getSeconds()<10? "0":"") + currentTime.getSeconds();
},1000);