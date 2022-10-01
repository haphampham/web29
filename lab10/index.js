// toán tử 3 ngôi :? -là một dạng if else
// khác biệt vs if else :? sử dụng dể gán/trả về một giá trị tùy thuộc vào đk chứ phải để chạy các câu lệnh như if else 

// cú pháp 
// 1 :gán giá trị 

// while(condtion){
//     conde;
// }

// --------
// while
// do
// for
// xác định tham số vòng lặp (i)
// đk để dừng vòng lặp (i>10)
// đk để vòng lặp chạy (i<=)
// thực hiện lặp đi lặp lại các câu lệnh bên trong cho đến khi đk condition đc đánh giá là false 
// vòng lặp while sẽ kiểm tra đk trước khi chạy
let i=1;
while (i<=10){
    console.log(1);
    i++;
}

// for 
// có thể khai báo nhiều vòng lặp ,phan tách nhau bằng ","
// đk thì có thể kết hợp nhiều đk vs toán tử logic
// bước cập nhật tham số
for(let i =1 ; i<=10;i++){
    console.log(i);
}
// begin :khai báo tham số vòng lặp
// condtion: đk để vòng lặp chạy (đk phải dùng)
// step: tăng hoặc giảm giá trị của tham số vòng lặp sau mỗi lượt 



// function myFunction() {
//     var n = document.getElementById("isNumber").value;
//     document.getElementById("demo").innerHTML = n;
//      var flag = true;

//      if (n < 2){
//          flag = false;
//      }
//      else{
      
//          for (var i = 2; i < n-1; i++)
//          {
//              if (n % i == 0){
//                  flag = false;
//                  break;
//              }
//          }
//      }

//      if (flag == true){
//          document.write(n + " là số nguyên tố <br/>");
//      }
//      else{
//          document.write(n + " không phải là số nguyên tố <br/>");
//      }
//   }
