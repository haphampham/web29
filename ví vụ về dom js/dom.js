//document.getElementById("main-content").innerHTML = "Chào mừng các bạn đến với website học lập trình online freetuts.net"

// var element = document.getElementById("website");
 
// // Lấy giá trị của thẻ input
// document.write(element.value);


// var element = document.getElementsByTagName('input');
// // Lấy giá trị của thẻ input
// document.write(element[0].value);


// var element = document.getElementsByClassName('website');
 
// // Lấy giá trị của thẻ input
// document.write(element[0].value);

// var element = document.querySelectorAll("div input.website");
// document.write('<h3>Nội dung thẻ cần lấy là: ' + element[1].value + '</h3>');

 // Hàm thiết lập nội dung cho thẻ div#content
 function set_content()
 {
   document.getElementById("content").innerHTML = "<h1>Nội dung đã được thay đổi</h1>";  
 }
  
 // Hàm lấy nội dung cho thẻ div#content
 function get_content()
 {
   var html = document.getElementById("content").innerHTML;
   alert("Nội dung cần lấy là: " + html);        
 }