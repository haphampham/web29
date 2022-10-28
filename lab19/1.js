 const clock = document.querySelector(".clock");
 const hour = document.querySelector(".hour");
 const minute = document.querySelector(".minute");
 const second = document.querySelector(".second");
 const date = document.querySelector(".date");


function sync(){
const now = new Date();

const h = now.getHours();
const n = now.getMinutes();
const s = now.getSeconds();

hour.stype.transform = "translate(-1.5, -1.5px) rotatel(" + h * 30 + "deg)";
minute.stype.transform = "translate(-1px,-1px) rotatel(" + n * 6 + "deg)";
second.stype.transform = " translate(-0.5px,-0.5px) rotatel(" + s * 6 + "deg)";

date.innerHTML=
"thansg" +
 } 



 window.onload = function(){
  sync();
  setInterval(sync,1000);
 };
		