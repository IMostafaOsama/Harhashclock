// clock code
setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let period = document.getElementById("period");
  let day = document.getElementById("day");
  let dayname = document.getElementById("dayname");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();
  let am = hrs >= 12 ? "PM" : "AM";

  let currentdate = new Date().toString();
  dayname.innerHTML = currentdate.split(" ")[0];
  day.innerHTML = currentdate.split(" ")[2];
  month.innerHTML = currentdate.split(" ")[1];
  year.innerHTML = currentdate.split(" ")[3];

  // convert 24 hrs into 12 hrs
  if (hrs > 12) {
    hrs -= 12;
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;
  hours.innerHTML = hrs;
  minutes.innerHTML = mins;
  seconds.innerHTML = secs;
  period.innerHTML = am;
}, 1000);

//backgroung change theme by time
//        if(hrs<6 && hrs>18){
//            document.querySelector('body').style.backgroundColor = 'blue';
//            document.querySelector('.clock').style.color = 'white';
//            document.querySelector('.all').style.borderColor = 'white';
//        }else{
//            document.querySelector('body').style.backgroundColor = '#151515'
//        }
