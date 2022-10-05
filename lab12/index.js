//number
//string
//datetime
//JSON
//array

//cho phép gọi các pthức của kiểu dữ liệu tương ứng trực tiếp trên các gtri nguyeen thủy
// 34;
// ("lan anh");
// Number.prototype;
// String.prototype;
// Array.prototype;

// function counter(value){
//     this.value
// }


// let number =225;

// console.log(number.toLocaleString("vi"));
// console.log(number.toFixed(1));
// console.log(number.toPrecision(1));
// console.log(number.toString(1));
// console.log(number.toString(16));//HEX

// console.log(Math.random());// tạo số ngẫu nhiên 0--1
// console.log(Math.PI);//giá trị pi
// console.log(Math.max(5,3,6,1));// tìm số lơn nhất
// console.log(Math.min(1,-1,6));// tìm số nhỉ nhất 
// console.log(Math.floor(1.234));//làm tròn xuống
// console.log(Math.ceil(1.234));// làm tròn lên


// //tạo ra một giá trị ngẫu nhiên trong môt khoảng
// Math.floor(Math.random() * (max - min) + min);


//string

// có tính chất gần giống mảng, từng kí tự bên trong chuỗi đếu đc đánh số thứ tự 
//thứ tự thì bắt đầu từ 0
"ba nguyyen"
// cho phép truy cập trực tiếp kí tự thông qua index
let str = "ba nguyễn";
console.log(str[1]);
console.log(str.length);// đọ dài - số lượng kí tự trong chuỗi


str[1]="o"// ko gây lõi ,nhưng ko coa tac dụng 

String.prototype.trim
console.log(str.trim());// loại bỏ các kí tự bất chặng trắng và duoengf nối hàng đầu và đường mòn khỏi mooyj chuỗi 
console.log(str.toLowerCase());// chuyển đổi tất cả các kí tự chữ cái trong 1 chuỗi thành thường
console.log(str.toUpperCase());// thường thành hoa
console.log(str.replace());
console.log(str.indexOf());
console.log(str.split());
console.log(str.slice());


// datetime
// đối tượng đại diện cho 1 giá trị thời gian

Date
const present = new Date();// thời gian hiện tại

const brithday = new Date ("26-08-2004");
// lấy số miliseciond đãtrôi qua kể từ 
const now = Date.now();

// dựa trên số milisecond đã trôi qua kể từ thời điểm
// 1970-01=01 00:00:00.000 --> EPOC time
const today = new Date (now);

console.log(present);
console.log(brithday);
console.log(now);
console.log(today);

// month bắt đàu từ 0-11
// new Date(year, month, date, hour, minute, second,)
const dob = new Date (2004,8,26 ,7);
console.log(dob);

// Getter
console.log(present.getFullYear());
console.log(present.getMonth());
console.log(present.getDate());
console.log(present.getDay());

console.log(present.toDateString());
console.log(present.toTimeString());
console.log(
    present.toLocaleString("vi", {
    year:"numeric",
    month:"long",
    day:"numeric",
    weekday:"long",
    dayPeriod:"long",
})
);
// Setter
// khi giá trị thời gian thiết lập vượt quá phạm vi
// sẽ tự điều chỉnh tăng/giảm cho phù hopqj 
// tháng 2 =>1/3
present.setFullYear(1999);
present.setMonth(2);
present.setDate(29);
console.log(present);

// array 
// tập hợp  các giấ trị đc lưu trữ trong 1 biến
// khác vs obj , các giá trị trong 1 mảng thì ko ccos key
//các giá trị (phần tử) trong mảng phân tách bằng dấu ,
const arr=[1,2,3,4];

// tính chất của mảng
// các phần tử trong mảng đc đánh số thứ tự (chỉ mục -index)
// bắt đầu từ 0
// có thể truy cập phần tử thông qua chỉ mục 
console.log(arr[0]);
console.log(arr[2]);
console.log(arr.length); // số lượng phần tử

// thay đổi trực tiếp các giá tị phàn tử 
arr [0]= 100;
console.log(arr);

arr[2]=30;
console.log(arr);

console.log(typeof arr ); //"obj"
console.log(Array.isArray(arr)); //true

// lenght sẽ tự đọng thay đổi khi thêm/xóa phần tử khỏi mảng
// có thể tùy ý thay đoiỉ lenght (ảnh hưởng các phần tử trong mảng)
arr[arr.length] =5; // thêm 1 phần tử mới
arr[arr.length-1]; // truy cập phần tử cuối cùng
arr.length=100; // thêm các phần tử empty vào cuối mảng
arr.length=0; // xóa tất cả phần tử trong mảng

// đổi chỗ 2 phần tử
let temp = arr[0]; // 1
arr [0] =arr [2]; // bốc 3 sang vị trí của 1
arr [2]= temp ; // đặt 1 vào vị trí của 3

// duyêt mảng
// co thể truy cập đc cả index .và value
for (let index = 0; index<arr.length; index++){
    console.log(arr[index]);
}

// let str = "ba nguyễn";

for (let index =0; index< str.length; index++){
    console.log(str[index]);
}


// chỉ duyệt qua giá trị
for (let value of arr){
    console.log(value);
}

for (let char of str ){
    console.log
}
const arr = [4, 3, 5, 9, 10, 2];
// tính tổng các số trong mảng

function sumAll(arr){
    let sum = 0;
    for (let value of arr){
        sum += value;
    }
    return sum;
}
console.log(sumAll(arr));

arr.includes(3);
arr.indexOf (5);
arr.slice(1,4);
arr.push(21); // 7 (new lenght) - thêm vào chuỗi 
arr.unshift(9); // thêm vào đầu - 8 (new lenhgt)
arr.pop();//21- xoa sở đầu
arr.shift(); //9- xoa sở cuối
arr.reverse(); // đảo ngược lại 
arr.concat([1,2,3]) // trả về mảng mới
arr.join("-"); // " 2-10-9-5-3-4"

