let Hours = document.getElementById('Hours');
let Minutes = document.getElementById('Min');
let  Seconds = document.getElementById('Sec');

let currentTime = new  Date();
 
const Hour=(()=>{
    Hour.innerHtml = currentTime.getHours();
})

Hours();

