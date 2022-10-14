// let students =["lan anh", "ba", "béo ú", " hà ","phong" ];

// tìm index của tên đầu tiên chứa 2 từ(phân tách bằng đấu " ")
//   "lan anh".split("");  
// function hasTwoWords(name){
//      return name.split(" ").length === 2 ;
//  }

// let index = students.findIndex(hasTwoWords);

// let index = -1;
// for (let i =0;  i<students.length; i++){
//     if(hasTwoWords(students[i])){
//         index = 1;
//         break;
//     }
// }
//  console.log(index);


// filter
// let result = students.filter(hasTwoWords);

// for(let name of students){
//     if(hasTwoWords(name)){
//         result.push(name);
//     }
// }
// console.log(result);

// map - chuyển đổi giá trị trong mảng 

// function length (name){
//     return name.length;
// }
// let result =  students.map(length);
// // ------
// // for (let name of students){
// //     result.push(length(name));
// // }
// console.log(result);

//  reduce - tổng hợp các gái trị trong mảng
// ghép các chữ cái đầu tiên của mỗi tên  => "LBBHP"
// name[o] name.charAt[0]
// ghép => biến tích lũy 

// let firstChar = function(name){
//     return name.charAt(0).toUpperCase();
// };
// let joinFirstChar = function (result, name){
//     const char = firstChar(name);

//     return result.concat(char);
// };


// let result = students.reduce(joinFirstChar,"");

// for( let name of students){
//     result = joinFirstChar(result,name);
// }
// console.log(result);

// sort - sắp xếp
// callback phải trả veef số 
// function compareByLength(name1,name2){
//     return name1.length - name2.length;
// }
// students.sort(compareByLength);
// console.log(students);

function getEle(arr,value){
    return arr.filter(function (el){
        return el > value;
    });
}
console.log(getEle([7,4,8,9,3,5,],2))

let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

let info = products.map((product) => {
  return `${product.name} - ${product.price} - ${product.brand} - ${product.count}`;
});
console.log(info);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let sum = products.reduce((sum, value) => {
  return (sum += value.price * value.count);
}, 0);
console.log(sum);
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let findApple = products.filter((product) => {
  return product.brand.toLowerCase().includes("apple");
}, []);
console.log(findApple);
// 4. Tìm các sản phẩm có giá > 20000000
let findBigger20 = products.filter((product) => {
  return product.price > 20000000;
}, []);
console.log(findBigger20);
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let findPro = products.filter((product) => {
  return product.name.toLowerCase().includes("pro");
});
console.log(findPro);


const tfoot = 
    "<tfoot>"+
    "<tr>"+
    "<td colspan="4">Total</td>" +
    " <td>"+
     costTotal +
    "</td>"+
    "</tr>"+
    "</tfoot>";
    const productHTML = products.map(function)
