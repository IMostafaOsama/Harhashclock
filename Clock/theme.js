// light and dark mode switch
function changeToLight() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".clock").style.color = "black";
  document.querySelector(".all").style.borderColor = "black";
  document.querySelector(".all").style.color = "black";
  document.querySelector(".all2").style.borderColor = "black";
  document.querySelector(".all2").style.color = "black";
  document.querySelector(".all3").style.borderColor = "black";
  document.querySelector(".all3").style.color = "black";
  document.querySelector(".all4").style.borderColor = "black";
  document.querySelector(".all4").style.color = "black";
  document.querySelector(".menuimg").style.filter = "invert(0%)";
  document.querySelector(".themelight").style.backgroundColor = "white";
  document.querySelector(".themedark").style.backgroundColor = "white";
  document.querySelector(".themelight").style.color = "white";
  document.querySelector(".themedark").style.color = "white";
  document.querySelector(".themelight").style.display = "none";
  document.querySelector(".themedark").style.display = "flex";

  document.querySelector(".setalarmbtn").style.backgroundColor = "black";
  document.querySelector(".setalarmbtn").style.color = "white";

  document.querySelector(".set2alarmbtn").style.backgroundColor = "black";
  document.querySelector(".set2alarmbtn").style.color = "white";

  document.querySelector(".selectalarm").style.backgroundColor = "lightgray";
  document.querySelector(".selectalarm").style.color = "black";
  document.querySelector(".selectalarm2").style.backgroundColor = "lightgray";
  document.querySelector(".selectalarm2").style.color = "black";
  document.querySelector(".selectalarm3").style.backgroundColor = "lightgray";
  document.querySelector(".selectalarm3").style.color = "black";

  document.querySelector(".timerstart").style.backgroundColor = "black";
  document.querySelector(".timerstart").style.color = "white";
  document.querySelector(".timerreset").style.backgroundColor = "black";
  document.querySelector(".timerreset").style.color = "white";

  document.querySelector(".start").style.backgroundColor = "black";
  document.querySelector(".start").style.color = "white";
  document.querySelector(".reset").style.backgroundColor = "black";
  document.querySelector(".reset").style.color = "white";
  document.querySelector(".Stop").style.backgroundColor = "red";
  document.querySelector(".Stop").style.color = "black";
}

function changeToDark() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".clock").style.color = "white";
  document.querySelector(".all").style.borderColor = "white";
  document.querySelector(".all").style.color = "white";
  document.querySelector(".all2").style.borderColor = "white";
  document.querySelector(".all2").style.color = "white";
  document.querySelector(".all3").style.borderColor = "white";
  document.querySelector(".all3").style.color = "white";
  document.querySelector(".all4").style.borderColor = "white";
  document.querySelector(".all4").style.color = "white";
  document.querySelector(".menuimg").style.filter = "invert(100%)";
  document.querySelector(".themelight").style.backgroundColor = "black";
  document.querySelector(".themedark").style.backgroundColor = "black";
  document.querySelector(".themelight").style.color = "black";
  document.querySelector(".themedark").style.color = "black";
  document.querySelector(".themedark").style.display = "none";
  document.querySelector(".themelight").style.display = "flex";

  document.querySelector(".setalarmbtn").style.backgroundColor = "white";
  document.querySelector(".setalarmbtn").style.color = "black";

  document.querySelector(".selectalarm").style.backgroundColor = "#151515";
  document.querySelector(".selectalarm").style.color = "white";
  document.querySelector(".selectalarm2").style.backgroundColor = "#151515";
  document.querySelector(".selectalarm2").style.color = "white";
  document.querySelector(".selectalarm3").style.backgroundColor = "#151515";
  document.querySelector(".selectalarm3").style.color = "white";

  document.querySelector(".set2alarmbtn").style.backgroundColor = "white";
  document.querySelector(".set2alarmbtn").style.color = "black";

  document.querySelector(".timerstart").style.backgroundColor = "white";
  document.querySelector(".timerstart").style.color = "black";
  document.querySelector(".timerreset").style.backgroundColor = "white";
  document.querySelector(".timerreset").style.color = "black";

  document.querySelector(".startup").style.backgroundColor = "white";
  document.querySelector(".startup").style.color = "black";

  document.querySelector(".resetstartup").style.backgroundColor = "white";
  document.querySelector(".resetstartup").style.color = "black";

  document.querySelector(".start").style.backgroundColor = "white";
  document.querySelector(".start").style.color = "black";
  document.querySelector(".reset").style.backgroundColor = "white";
  document.querySelector(".reset").style.color = "black";
  document.querySelector(".Stop").style.backgroundColor = "red";
  document.querySelector(".Stop").style.color = "white";
}

/*
if(document.querySelector('body').style.backgroundColor === 'white'){
    document.querySelector('.startstopbtn').style.color = 'black';
    document.querySelector('.startstopbtn').style.backgroundColor = 'red';
}else if(document.querySelector('body').style.backgroundColor === 'black'){
    document.querySelector('.startstopbtn').style.color = 'white';
    document.querySelector('.startstopbtn').style.backgroundColor = 'red';
}

if(document.querySelector('body').style.backgroundColor === 'white'){
    document.querySelector('.startstopbtn').style.color = 'white';
    document.querySelector('.startstopbtn').style.backgroundColor = 'black';
}else if(document.querySelector('body').style.backgroundColor === 'black'){
    document.querySelector('.startstopbtn').style.color = 'black';
    document.querySelector('.startstopbtn').style.backgroundColor = 'white';
}
*/
