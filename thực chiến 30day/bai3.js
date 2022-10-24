const openbtn= document.querySelector(".open-btn");
const modal= document.querySelector(".modal");
const iconclose= document.querySelector(".modal-hear i");
const btnclose= document.querySelector(".modal-footer button");

function toggorModal(e){
  modal.classList.toggle('an')
}
openbtn.addEventListener('click',toggorModal)
modal.addEventListener('click',function(e){
    if(e.target=== e.currentTarget){
        toggorModal()
    }
})
iconclose.addEventListener('click',toggorModal)
btnclose.addEventListener('click',toggorModal)

// 
const btnSeach = document.querySelector(".seach-box_btn");

btnSeach.addEventListener('click',function(){
    this.parentElement.classList.toggle('seach-box_open')
    this.previousElementSibling.focus();
})