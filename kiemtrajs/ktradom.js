
const qt = document.querySelector(".qt .lastchild");
const qtminus = document.querySelector(".qt-minus .lastchild");
const qtplus = document.querySelector(".qt-plus .lastchild");


function increase(item, el) {
   const cartItem = cart.find(function (cartItem) {
       return cartItem.product === item.product.id;
   });

   cartItem.quantity += 1;
   el.querySelector(".qt").innerText = cartItem.quantity;

   updateTotalBill();
}

function decrease(item, el) {
   const cartItem = cart.find(function (cartItem) {
       return cartItem.product === item.product.id;
   });

   if (cartItem.quantity > 1) {
       cartItem.quantity -= 1;
       el.querySelector(".qt").innerText = cartItem.quantity;

       updateTotalBill();
   }
}
 
 