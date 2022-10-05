 // hiieeur đơn giản thì object là kiểu dữ liệu phức hợp 
 // cho phép lưu trữ nhiều giá trị khác nhau trong 1 biến duy nhata 
 // key là định danh cho giá trị
//   const person ={
//     name: "ba",
//     age:30,
//      gender: "male",
//     weight: 53,
//     height:170,
//     key:123,

// // // cú pháp es6
//  speak() {
//    console.log('heloo ');
// }
//  };

//  // dot notation -dấu chấm
//  console.log(person.name);

 
// person.speak();


// const computer ={
//   brand:"lenovo",
//   type: "laptop",

//   speak(){
//    console.log("");
   
//   }
// }
// console.log(computer.brand);
// console.log(computer.type);


// // thao tác vơi ob
// //thêm thuoccj tính

// personalbar.ishandsome =true;

// personalbar.age =31;

// personalbar.sleep =function ( ){
//    console.log ("going to sleep");
// };
// console.log(personalbar);
// delete personalbar.ishandsome;
// delete personalbar.sleep;

// console.log(personalbar);

// // kiểm tra xem đối tượng có  thuộc tính này hay ko 
// console.log("name" in personalbar);
// console.log("something" in personalbar);


// console.log (personalbar.name);

// // cú pháp duyeetj qua thuộc tính trong object
// // key là thsm số  vòng lặp (thuộc tính)
// // khi truy cập đến 1 thuộc tính ko tồn tại => undifind
// for(let key in personalbar){
//    // bracket notation -ngoặc vuông
//    // sử dụng khi csio 1 biến có giá trị la fthuoocj tính bên trong object
//    const value =personalbar [key];
//    console.log(value);
// }



const person ={
   name: "ba",
   age:30,
    gender: "male",
   weight: 53,
   height:170,

speak() {
// this là toán tử đặc biệt dtrong phương thức của đối tượng 
// this đại diện cho đối tượng gọi pt
// this là đối tượng ở trước dấu chấm
   console.log("hi"  + this.name);
},
};
// person.speak();// this = person
 
// let  copy = person ;

// person = null ;

// copy.speak ();// this = copy

function findarea(){
 return this.width*this.length;
}
let rectangle1 = {
   width:10,
   length:3,
};
let rectangle2 = {
   width:13,
   length:4,
};

rectangle1.findarea = findarea;
rectangle2.findarea =findarea;

console.log(rectangle1.findarea());
console.log(rectangle2.findarea());

// SUMMARY
// cú pháp :{ }
// thuộc tính,giá trị => key:value
// truy cập: key.value
// thêm/ sửa/xóa /kiểm tra 1 thuộc tính
// lặp qua câc thuộc tonhs for in

// ADVANCE
// console.log(rectangle1);// width,lenght, findarea

// confirm.log(rectangle1.toString());

// //kế thừa  từ nguyên mẫu(prototype)
// console.log( Object.prototype);
// console.log(rectangle1._proto_);

// console.log(Object.prototype === rectangle1._proto_);

// console.log(Object.prototype === rectangle2._proto_);


const myPrototype = {
   findarea(){
      return (this.width*this.length) *2;
   },
   findchuvi(){
      return ( this.width + this.length) *2;
   },
   toString (){
      return (
         "hình chữ nhât"
         )
   }
   
}
rectangle1._proto_ =myPrototype;
rectangle2._proto_ =myPrototype;
console.log(rectangle1.findarea());

// console.log(rectangle1.findchuvi());

rectangle1.toString();// gọi trường hợp mà  yêu cầu object chuyển về chuỗi 

console.log(String(rectangle1));


// toString
// mặc định tất cả object đều in ra chuỗi [ objiect Object]

// các kiểu dữ liệu 
// primitive: các giá trị thô như chuỗi ,số ,boolean,null ,undefined,symbol
// refences: obj- biến chỉ lưu trữ vị trí bộ nhớ ,chứ ko phải gtri


// references ảnh hưởng đến 
// khi sao chép obj thì 2 obj bị ảnh hưởng lẫn nhau 
// khi truyền obj vào 1 hàm
 
// function demo (obj){
//    obj.x =10;
// }

//  let data ={
//    x:1,
//  };
//  console.log(data);
//  demo(data);

//  console.log(data);

//  .........

// let obj ={ // 0x004
//    x: 1,
// };
// let clone=obj ; // 0x004

// console.log(obj.x);

// clone.x=10; // tìm đến vùng nhớ 0x004 =. chỉnh sửa vị trí

// console.log(obj.x); // tìm đến vùng nhó 0x004 => in ra gtri

// ,,,,,,,,,,,,,,

let source ={
   value:1,
};
// let copy={};
// for(let key in source){
//    copy[key] = source[key]


 let copy =Object.assign({}, source);
 copy.value = 100;

 console.log(copy);
 console.log(source);

 // nếu trong obj  có thuoocjntinhs là obj con thì thế nào???
 let demo ={
   child:{
      value:1,   
   },
 };
 

 // constructor--hàm cho phép tạo ra cấc đối tượng 
 // tên hàm thì sử dụng pascal case (viết hao tất cả chữ cái đầu)
 function rectangle(){
   this.width = this.width;
   this.length = this.length;
 }

 rectangle.prototype ={
   area(){
      return this.width* this.length;

   },
   perimeter(){
      return (this.width+ this.length) *2;
   },
 };
 
 // new cóntructor
 const r1 = new rectangle(10,5);
 const r2 = new rectangle(12,4);
 const r3 = new rectangle(10,5);
 
 console.log(r1);
 console.log(r1.area());