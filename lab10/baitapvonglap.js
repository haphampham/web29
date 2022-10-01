 function bai1() {
    var str = prompt("Nhập vào 1 chuỗi kí tự bất kì");
     var loopResult = "";
    for (var i = 0; i < 10; i++) {
       
     }
     document.getElementById("result-1").innerHTML = loopResult.slice(0, -1);
  }


  function bai2() {
    var str = prompt("Nhập vào 1 chuỗi kí tự bất kì");
     var loopResult = "";
    for (var i = 0; i < 10; i++) {
       loopResult += `${str}-`;
     }
     document.getElementById("result-2").innerHTML = loopResult.slice(0, -1);
  }