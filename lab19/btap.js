const img = document.querySelector(".img");
const box = document.querySelector(".box")
let count = 0;

function displayheart(x,y){
  const heart = document.createElement(".span");
  heart.className = "heart";
  heart.innerText = "❤️"
  heart.style.position ="absolue";
  heart.style.top = y +"px";
  heart.style.left = x + "px";
  heart.style.transform = "transform(-50% ,-50%)";

  box.append(heart);
  setTimeout(function(){
    heart.remove();
  }, 500)
}

function countup(){
  count++;
  times.innerText = count;
}
function like(e){
    const x = e.offsetX;
    const y = e.offsetY;

    displayheart(x,y)
   

}
window.onload = function (){
    img.ondblclick = like;
};