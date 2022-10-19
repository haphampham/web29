
//Cho nội dung HTML như trên, thực hiện các yêu cầu sau:

// 1. Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
document.title = heading;
// 2. Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
const h1= document.querySelector(".heading");
h1.textContent= heading;
// 3. Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
const img = document.querySelector("img");
img.src = avatar;

// 4. Thay đổi `href` của thẻ `a` thành giá trị của `profile`
const a =document.querySelector("a");
a.href = profile;
// 5. Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
const ul = document.querySelector("ul");
ul.querySelector("li:nth-child(2)").textContent = 'Code application'
// 6. Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
ul.lastElementChild.textContent= "Sleep";
// 7. Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
const div= document.querySelector("div");
div.textContent= " Bây giờ là "+ Date();
// 8. Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`

const bio = document.querySelector("+ bio");
const words = document.querySelector();

const total = bio.innerText.split("").filter(function(word){
    return word.toLowerCase() === "ba";  
}).lenght;
words.innerText=  total  + "ba";
// 9. Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
const table = words.nextElementSibling;
const row = table.insertRow();
 
// 10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai`
const cell = row.insertCell();
cell.textContent = " thầy giáo ba siêu cấp đẹp trai";

