const set = document.getElementById('set2alarmbtn');
const audio = document.getElementById('audio');

let alahours = document.getElementById('sethour');
let alamens = document.getElementById('setmins');
let alaampm = document.getElementById('setampm');

let currentClockValue;
let nextAlarm;

for (let i = 0; i < 60; i++) {
    if (i<10) {
        alamens.innerHTML += '<option value="0'+i+'">0'+i+'</option>';
    } else{
        alamens.innerHTML += '<option value="'+i+'">'+i+'</option>';
    }
}
for (let i = 1; i <= 12; i++) {
    if (i<10) {
        alahours.innerHTML += '<option value="0'+i+'">0'+i+'</option>';
    } else{
        alahours.innerHTML += '<option value="'+i+'">'+i+'</option>';
    }
}
alaampm.innerHTML += '<option value="AM">AM</option>';
alaampm.innerHTML += '<option value="PM">PM</option>';


function setalarmbtn(){

    audio.pause();
    audio.currentTime = 0;

    document.querySelector('.setalarmbtn').style.display = 'none';
    document.querySelector('.set2alarmbtn').style.display = 'block';
    document.querySelector('.cancelalarmbtn').style.display = 'block';
    document.querySelector('.clearalarmbtn').style.display = 'none';
    document.querySelector('.selectalarm').style.display = 'flex';
    document.querySelector('.selectalarm2').style.display = 'flex';
    document.querySelector('.selectalarm3').style.display = 'flex';
    document.querySelector('.selectalarm').style.backgroundColor = '';
    document.querySelector('.selectalarm2').style.backgroundColor = '';
    document.querySelector('.selectalarm3').style.backgroundColor = '';
    document.querySelector('.selectalarm').style.color = '';
    document.querySelector('.selectalarm2').style.color = '';
    document.querySelector('.selectalarm3').style.color = '';
    document.querySelector('.been-set').style.display = 'none';
    document.querySelector('.been-cleared').style.display = 'none';
    document.querySelector('.been-canceled').style.display = 'none';    
}

function set2alarmbtn(){

    
if (alahours.value != "" && alamens.value != "" && alaampm.value != "") {

    document.querySelector('.setalarmbtn').style.display = 'none';
    document.querySelector('.set2alarmbtn').style.display = 'none';
    document.querySelector('.cancelalarmbtn').style.display = 'none';
    document.querySelector('.clearalarmbtn').style.display = 'block';
    document.querySelector('.selectalarm').style.display = 'none';
    document.querySelector('.selectalarm2').style.display = 'none';
    document.querySelector('.selectalarm3').style.display = 'none';
    document.querySelector('.been-set').style.display = 'flex';
    document.querySelector('.been-cleared').style.display = 'none';    
    document.querySelector('.been-canceled').style.display = 'none';  
   

    
    // alarm code
    setInterval((alarm_interval) => {
        currentHrs = new Date().toString().split(" ")[4].split(":")[0];
        currentMen = new Date().toString().split(" ")[4].split(":")[1];
        currentClockValue = currentHrs + ':' + currentMen + ':' + period.innerHTML;
        nextAlarm = alahours.value + ':' + alamens.value + ':' + alaampm.value;
    console.log(alahours.value)
        if (nextAlarm == currentClockValue && document.querySelector('.clearalarmbtn').style.display == 'block') {
            audio.play();
        }
/*
        remainingHrs = alahours.value - currentHrs;
        remainingMens = alamens.value - currentMen;
        if (remainingHrs < 0) {
            remainingHrs += 23;
        }
        if (remainingHrs == 0) {
            remainingHrs = 24;
        }
        if (remainingMens < 0) {
            remainingMens += 59;
        }
        if (period.innerHTML != alaampm.value) {
            remainingHrs -= 13;
        }
        remainingTime = remainingHrs + ':' + remainingMens;
        
        console.log(remainingTime);
    
        document.querySelector('.been-set').innerHTML = 'remaining Time is:' + ' ' + remainingTime;
*/
        document.querySelector('.been-set').innerHTML = 'Alarm set at:' + ' ' + nextAlarm;

    },1000);
}

if (alahours.value == "") {
    document.querySelector('.selectalarm').style.backgroundColor = 'red';
}else{
    document.querySelector('.selectalarm').style.backgroundColor = '';
}
if (alamens.value == "") {
    document.querySelector('.selectalarm2').style.backgroundColor = 'red';
}else{
    document.querySelector('.selectalarm2').style.backgroundColor = '';
}
if (alaampm.value == "") {
    document.querySelector('.selectalarm3').style.backgroundColor = 'red';
}else{
    document.querySelector('.selectalarm3').style.backgroundColor = '';
}

}

function clearalarmbtn(){
        
    audio.pause();
    audio.currentTime = 0;
    alahours.value = alamens.value = alaampm.value = '';

    document.querySelector('.setalarmbtn').style.display = 'block';
    document.querySelector('.clearalarmbtn').style.display = 'none';
    document.querySelector('.cancelalarmbtn').style.display = 'none';
    document.querySelector('.clearalarmbtn').style.display = 'none';
    document.querySelector('.selectalarm').style.display = 'none';
    document.querySelector('.selectalarm2').style.display = 'none';
    document.querySelector('.selectalarm3').style.display = 'none';
    document.querySelector('.selectalarm').style.backgroundColor = '';
    document.querySelector('.selectalarm2').style.backgroundColor = '';
    document.querySelector('.selectalarm3').style.backgroundColor = '';
    document.querySelector('.selectalarm').style.color = '';
    document.querySelector('.selectalarm2').style.color = '';
    document.querySelector('.selectalarm3').style.color = '';
    document.querySelector('.been-set').style.display = 'none';
    document.querySelector('.been-cleared').style.display = 'flex';
    document.querySelector('.been-canceled').style.display = 'none';    
}

function cancelalarmbtn(){

    audio.pause();
    audio.currentTime = 0;
    alahours.value = alamens.value = alaampm.value = '';

    document.querySelector('.setalarmbtn').style.display = 'block';
    document.querySelector('.set2alarmbtn').style.display = 'none';
    document.querySelector('.cancelalarmbtn').style.display = 'none';
    document.querySelector('.clearalarmbtn').style.display = 'none';
    document.querySelector('.selectalarm').style.display = 'none';
    document.querySelector('.selectalarm2').style.display = 'none';
    document.querySelector('.selectalarm3').style.display = 'none';
    document.querySelector('.selectalarm').style.backgroundColor = '';
    document.querySelector('.selectalarm2').style.backgroundColor = '';
    document.querySelector('.selectalarm3').style.backgroundColor = '';
    document.querySelector('.selectalarm').style.color = '';
    document.querySelector('.selectalarm2').style.color = '';
    document.querySelector('.selectalarm3').style.color = '';
    document.querySelector('.been-set').style.display = 'none';
    document.querySelector('.been-cleared').style.display = 'none';
    document.querySelector('.been-canceled').style.display = 'flex';      
}