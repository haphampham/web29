 let currentIndex =0;

const items = document.querySelector(".caruose-inner").children;
const  btnNext = document.querySelector(".caruose-next");
const btnPrev = document.querySelector(".caruose-prev");

btnNext.onclick = function(){
    if(currentIndex <items.children.length -1){
        currentIndex++;

        items.style.marginLeft = -currentIndex * 600 + "px";
        btnPrev.disabled= false;
    } else {
       btnNext.disabled= true;
    }
     
};

btnPrev.onclick = function(){
    if(currentIndex > 0){
        currentIndex--;

        items.style.marginLeft = -currentIndex *  600 + "px";
        btnNext.disabled= false;
    } else {
       btnPrev.disabled= true;
    }
};