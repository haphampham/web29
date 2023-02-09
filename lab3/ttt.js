const buyBtns = document.querySelectorAll('.buy-ticket')
    const modal = document.querySelector('.modal')
      function showBuyTicket(){
     modal.classList.add('open',showBuyTicket)
      }

      for( const buyBtn of buyBtns){
         buyBtn.addEventListener('click', showBuyTicket)
      }
