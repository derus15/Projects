let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let button = document.querySelector('.btn');
let delet = document.querySelector('.btn_d')
let counter_sec = 0;
let counter_min = 1;
let counter_hour = 1;


button.addEventListener('click', S);

delet.addEventListener('click', D);

function D(){
    clearInterval(S);
}

function S() {
   {setInterval(start,1000)}
}

function start() {
     button.setAttribute('disabled', 'disabled');
     counter_sec ++;
     seconds.textContent = '0' + counter_sec;
     if (counter_sec >= 10){
         seconds.textContent = counter_sec;
     }
     /*минуты*/
     if (counter_sec >= 60){
         counter_sec = 0;
         minutes.textContent = '0' + counter_min + ':';
         counter_min ++;
     }
     if (counter_min >= 10){
         minutes.textContent = counter_min + ':';
     }
     /*часы*/
     if (counter_min >= 60){
         counter_min = 0;
         hours.textContent = '0' + counter_hour + ':'
         counter_hour ++;
     }
     if (counter_hour >= 10){
         hours.textContent = counter_hour + ':';
     }

}