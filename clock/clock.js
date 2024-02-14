let Hours = document.getElementById('Hours');
let Minutes = document.getElementById('Min');
let  Seconds = document.getElementById('Sec');

let currentTime = new  Date();


Hours.innerText = currentTime.getHours();
Minutes.innerText = currentTime.getMinutes();
Seconds.innerText = currentTime.getSeconds();
