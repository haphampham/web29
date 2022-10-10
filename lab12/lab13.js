// [].forEach();
// [].find();
// [].findIndex();
// [].map();
// [].filter();
// [].reduce();
// [].some();
// [].every();
// [].sort();

// function is frist- class citizens
// có thể làm bất cứ thứ gì với funtion
// giống như là 1 giá trọi thông thường
// gán hàm cho 1 bieenz  , có thể truyền vào hàm khác
// là giá trị return 

// for ( let index = 0; index<arr.length; index++){
    // callback (value , index , arr);
//}


// includes, indexOf, lastIndexOf
// arr.find()
// let arr = [1,2,3,4,5];
// in từng giá trị trong mảng ra console.log

// for(let value of arr ){
//     console.log(value);
//}
// sum(1,2);
// sum;// fuction sum (a,b,){return a+b}

// cosole.log là một hàm / phuownbg thức
// hàm callback
// là một hàm truyền vào hàm khấc dưới dạng đối số


// duyệt mảng , gọi hàm calback 1 lần với mỗi giá trị 
// ko có kết quả trả về , và cũng ko ngắt đc forEach
// arr.forEach(console.log);

// const isPrime = function (n){
// };
// for (let value of arr){
//     if(isPrime(value)){
//         console.log(value);
//         break;
//     }
// }

// tìm 1 giá trị đầu tiên phù hợp voiswi yêu cầu 
// đc đánh giá bởi hàm callback truyền vvaof
//  const  n =arr.find(isPrime);
//  console.log(n);
// tìm đc index của giá triij đầu tiên phù hợp vs yêu cầu 
// đc đánh gái bởi hàm callback
// const i = arr.findIndex(isPrime);
// console.log(i);

// tìm tất cả giá trị phù hợp vs yêu cầu 
// đc đánh gái bởi hàm callback
// let result =  arr.filter(isPrime);
// console.log(result);


// chuyển đổi tất cả giá trị trong mảng thành giá trị mới 
// gái triij mới đc tính toán bởi hàm callback truyền vào 
// mảng kết quả là mảng mới , ko ảnh hưởng mảng ban đầu

let arr = [1,4,7,2,9]
function pow (n){
    return n*n;
}

// for(let value of arr){
//     square.push(pow(value));

// }
const square = arr.map(pow);
console.log(square)

//
function sum(current, value){
    return current+value;
}

function mul (current,value){
    return current*value;
}
 const total = arr.reduce(mul, 1);// 1 gán cho tatal ban đàu
console.log(total);

let arryy = [1,3,45,6,78,];
let stringArray= ["ba","lan","béo","ú"];
// sắp xếp các giá trị bên trong mảng 
// mặc định thì hàm sort sắp xếp các giá ttrij bên trong mảng theo kiểu STRING 

stringArray.sort();
console.log(stringArray);

function comparison(a,b) { // a=1 ,b =4
     // phải return 1 số,
    // nếu a nhỏ hơn thì âm
    // nếu a lớn hơn thì dương
   return a-b;
}

arryy.sort(comparison);
console.log(arryy);



let student1 = {
    name:"ba",
    age:301,
};
let student2 = {
    name:"bao",
    age:302,
};
let student3 = {
    name:"baó",
    age:303,
};

let students = [student1,student2,student3];

function sortbyage (student1,student2){
    return student1.age -student2.age;
}


students.sort(sortbyage);
console.log(students);


