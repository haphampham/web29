// event-sự kiện là tín hiệu khi một điều gì đó xảy ra trên DOM , tất cả cscs node trong DOM đều có thể kích hoạt các event
// vd1
//  const btn = document.querySelector("button")

//  btn.onclick = function(){
//     console.log("á á á á ");
//  };
// vd2
//  const btnUp = document.querySelector(".btn-up");
//  const btnDown = document.querySelector(".btn-down");
//  const value = document.querySelector(".counter-value");

//  btnUp.onclick = function(){
//     value.innerText = Number(value.innerText)+1;
//  };
//  btnDown.onclick = function(){
//     value.innerText -=1;
//  };

//  function demo (){
//     console.log("chạy demo");
//  }
//  // cái này hay nhầm nhất
//  btnDown.onclick= demo();
//  // thống nhất sử dụng thuộc tính DOM

// vd3
// function f1(){
//     console.log("chạy hàm F1");
// }
// function f2(){
//     console.log("chạy hàm F2");
// }
// chỉ cho phép gắn 1 hàm cho 1 sự kiện cụ thể
// btnDown.onclick = function(){
//     f1();
//     f2();
// };
// eventType KO CÓ "ON"
//  btnUp.addEventListener(//eventType,handler,option
//   "click",f1);
//   btnUp.addEventListener("click",f1);

//   btnUp.removeEventListener("click",f2);

// const key = document.querySelector(".key");

// window.onkeypress = function(event){
//     key.textContent = event.key.toUpperCase();};

    // click => button
    // submit => form
    // change => input/textarea/select
    // keydown/keyup => window
 // chú ý 
//tùy thuộc vào loại sự kiện , thì evenObj sẽ có các thuộc tính  khác nhau 
// các thuộc tính thường dùng 
//  e.target- phần tử kích hoạt sự kiện 
// e.currentTargeet - phần tử đc gắn trình sử lí

//e.target=> input=> truy cập tất cả các input

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener('input', function(e){
  e.target.value;

  p.innerText = e.target.value;
  // input/textarea => value
  // select => selected
  // checkbox/radio => checked

});
