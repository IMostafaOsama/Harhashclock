// side menu options
function opensidemenu() {
  document.querySelector(".sidebar").style.left = "0";
  document.querySelector(".sidebarwithbtn").style.width = "15vh";
  document.querySelector(".sidebar div").style.width = "15vh";
  document.querySelector(".sidebtn").style.display = "none";
  document.querySelector(".backiconbtn").style.display = "flex";
}
function closesidemenu() {
  document.querySelector(".sidebar").style.left = "-30vh";
  document.querySelector(".sidebarwithbtn").style.width = "0vh";
  document.querySelector(".sidebar div").style.width = "0vh";
  document.querySelector(".sidebtn").style.display = "flex";
  document.querySelector(".backiconbtn").style.display = "none";
}

function clockscreen() {
  document.querySelector(".horizontal").scrollLeft = 0;

  document.querySelector(".clockbtn").style.backgroundColor = "#151515";
  document.querySelector(".clockbtn").style.color = "white";

  document.querySelector(".stopwatchbtn").style.backgroundColor = "whitesmoke";
  document.querySelector(".stopwatchbtn").style.color = "black";

  document.querySelector(".counterbtn").style.backgroundColor = "whitesmoke";
  document.querySelector(".counterbtn").style.color = "black";

  document.querySelector(".clockdot").style.backgroundColor = "black";
  document.querySelector(".stopwatchdot").style.backgroundColor = "white";
  document.querySelector(".counterdot").style.backgroundColor = "white";
}
function stopwatchscreen() {
  document.querySelector(".horizontal").scrollLeft = 900;

  document.querySelector(".clockbtn").style.backgroundColor = "whitesmoke";
  document.querySelector(".clockbtn").style.color = "black";

  document.querySelector(".stopwatchbtn").style.backgroundColor = "#151515";
  document.querySelector(".stopwatchbtn").style.color = "white";

  document.querySelector(".counterbtn").style.backgroundColor = "whitesmoke";
  document.querySelector(".counterbtn").style.color = "black";

  document.querySelector(".clockdot").style.backgroundColor = "white";
  document.querySelector(".stopwatchdot").style.backgroundColor = "black";
  document.querySelector(".counterdot").style.backgroundColor = "white";
}
function counterscreen() {
  document.querySelector(".horizontal").scrollLeft = 1800;

  document.querySelector(".clockbtn").style.backgroundColor = "whitesmoke";
  document.querySelector(".clockbtn").style.color = "black";

  document.querySelector(".stopwatchbtn").style.backgroundColor = "whitesmoke";
  document.querySelector(".stopwatchbtn").style.color = "black";

  document.querySelector(".counterbtn").style.backgroundColor = "#151515";
  document.querySelector(".counterbtn").style.color = "white";

  document.querySelector(".clockdot").style.backgroundColor = "white";
  document.querySelector(".stopwatchdot").style.backgroundColor = "white";
  document.querySelector(".counterdot").style.backgroundColor = "black";
}
