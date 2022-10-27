const countupbtn = document.getElementById("countupbtn");
const counterrestbtn = document.getElementById("counterrestbtn");

let count = 0;

function countup() {
  count++;
  document.getElementById("counts").innerHTML = count;
  document.getElementById("counterrestbtn2").style.display = "inline-block";
  document.getElementById("counterrestbtn").style.display = "none";
}

function countrest() {
  count = 0;
  document.getElementById("counts").innerHTML = 0;
  document.getElementById("counterrestbtn2").style.display = "none";
  document.getElementById("counterrestbtn").style.display = "inline-block";
}
