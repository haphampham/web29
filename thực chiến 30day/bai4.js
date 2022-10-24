const imet = document.querySelectorAll(".imet img");
const phai = document.querySelector(".phai");
const trai = document.querySelector(".trai");
const close = document.querySelector(".close");
const grrelyimg = document.querySelector(".garelly-inner img");
const garelly =document.querySelector(".garelly");
let cuurindex = 0;

function Showgarelly(){
    if(cuurindex == 0){
       
      phai.classList.add("anlen")
    }else{
        phai.classList.remove("anlen")
    }

    if(cuurindex == imet.length-1){
       
        trai.classList.add("anlen")
      }else{
        trai.classList.remove("anlen")
      }
    // display
    grrelyimg.src = imet[cuurindex].src
    garelly.classList.add("hienthilen")
}



imet.forEach((item, index) =>{
    item.addEventListener('click',function(){
        cuurindex= index
        Showgarelly()
       
    })
})
close.addEventListener('click',function(){
    garelly.classList.remove("hienthilen")
})
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        garelly.classList.remove("hienthilen")
    }
})
phai.addEventListener('click',function(){
    if(cuurindex > 0){
        cuurindex --
        Showgarelly()
    }
})

trai.addEventListener('click',function(){
    if(cuurindex < imet.length-1){
        cuurindex ++
        Showgarelly()
    }
})