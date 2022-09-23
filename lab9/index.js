let x = 1;

 console.log(typeof x);
//  function
//  cac câu lệnh được bọc trommg khối mã và gán cho  tên biến
//  cho phép tái sử dụng mã nhiều lầm ,nhiều nơi

//  cú pháp khai báo hàm 
//  {phần body}
// tham số -parameters-()
 function chao(ten,abc) { 
  console.log("hello , " + ten + " raats vui đc làm quen");
 } 
//  đối số -arguments-các gí trị xác định cho tham số hàm
 chao("Ba");
 chao("Béo");
 chao("ú");
 chao("ị");
//  biểu thức hàm (giống khai báo biến)
const tambiet =function () {
    console.log("goodbye ba, chim cút ")
}
tambiet();

function cong(a,b){
    // giá trị trả về
    return a+b;

    console.log(a + b);
}

// cong(1,2); tạo ra các giá trị
console.log(cong(1,2));
console.log(cong(1,2));
console.log(cong(1,2));
//1. chạy hàm cong
//2.ham cong trả lại giá trị 3
//3. đặt giá trị 3 vào biểu thức console.log
//cosole.log(cong(1,2))=>cosole.log(3)=>in 3 ra màn hình