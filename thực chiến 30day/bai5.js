const btnSeach = document.querySelector(".seach-box_btn");

btnSeach.addEventListener('click',function(){
    this.parentElement.classList.toggle('seach-box_open')
    this.previousElementSibling.focus();
})