/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
 
 function min(arr) {
   let min =  arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) { 
            min = arr[i];
        }
    }
   return min;
}
console.log(min([5, 4, 7, 2, 8, 7, 3]));
 /**
  * Tìm số lớn nhất trong mảng
  *
  * @param {number[]} arr Mảng số bất kỳ
  *
  * @return {number} Số lớn nhất trong mảng
  */
 function max(arr) {
   let max =  arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) { 
            max = arr[i];
        }
    }
    return max;
}
console.log(max([5, 4, 7, 2, 8, 7, 3]));
 /**
  * Tìm số nhỏ nhất và lớn nhất trong mảng
  *
  * @param {number[]} arr Mảng số bất kỳ
  *
  * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
  */
 function minMax(arr) {
   let max =  arr[0];
   let min =  arr[0];    
   for (let i = 1; i < arr.length; i++) {
       if (max < arr[i]) { 
           max = arr[i];
       }
      if (min > arr[i]) { 
          min = arr[i];
      }
  }
 return [max,min];
} 
console.log(minMax([0,3,5,8,1,9,10]));

 
 
 /**
  * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
  *
  * Lưu ý mảng sau khi gọi phải thay đổi
  *
  * @param {number[]} arr Mảng số bất kỳ
  * @param {number} x Index 1
  * @param {number} y Index 2
  */
 function swap(arr, x, y) {
   let temp = arr[x]; 
arr [x] =arr [y]; 
arr [y]= temp ;
 return arr;
 }
 console.log(swap([1,2,3,4,5,6,7,8,9], 2 ,5))
 /**
  * Tìm các số xuất hiện trong cả 2 mảng
  *
  * @param {number[]} arr1 Mảng số bất kỳ
  * @param {number[]} arr2 Mảng số bất kỳ
  *
  * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
  */
 function intersection(arr1, arr2) {
   
    let result = [];

    for(let value of arr1){
        if(arr2.includes(value)) result.push(value);
    }
   return result;
}

console.log(intersection([1,2,3,4,5,6],[2,3,4,5,]));

       
 
 
 /**
  * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
  *
  * @param {number[]} arr1 Mảng số bất kỳ
  * @param {number} arr2 Mảng số bất kỳ
  *
  * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
  */
 function difference(arr1, arr2) {

 }
 
 /**
  * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
  *
  * Lưu ý: Thay đổi trực tiếp mảng
  *
  * @param {number[]} arr Mảng số bất kỳ
  */
 function removeDuplicate(arr) {
    // [].splice( start,count,...value); // xóa , chèn , thay thế
    // [].slice();
     
    let temp = {};

    for(let index = 0 ; index< arr.length; index++){
        const value = arr [index];

        if( temp[value]){
            arr.splice(index,1);
            index--;
        }else{
            temp[value] = true;
        }
    }
 }
 arr1= [1,2,3,4,5,6,7,8,1,2,3,4,5,6,78];
 removeDuplicate(arr1);
 console.log(arr1);
 /**
  * Tìm số lớn thứ 2 trong mảng
  *
  * @param {number[]} arr Mảng số bất kỳ
  *
  * @return {number} Số lớn thứ 2 trong mảng
  */
 function secondLargest(arr) {
    
    let max  =  arr[1];  
    for (let i = 1; i < arr.length; ++i) {
        if (max < arr[i] -1) { 
            max = arr[i] -1;
        }
    }
    console.log(max);
}
let mu = [5, 4, 7, 2, 8, 9,10, 3];
secondLargest(mu);

 /**
  * Xáo trộn vị trí các phần tử trong một mảng
  *
  * @param {any[]} arr Mảng bất kỳ
  *
  * @return {arr} Mảng bị xáo trộn
  */
 function shuffle(arr) {
    
        let x = arr.length, temporaryValue, y;
        while (0 !== x) {
          y = Math.floor(Math.random() * x);
         x -= 1;
          temporaryValue = arr[x];
          arr[x] = arr[y];
          arr[y] = temporaryValue;
        }
        return arr;
      }
      let arr = [2, 11, 37, 42];
      console.log(shuffle(arr));

 
 /**
  * @typedef {object} student
  * @property {number} id - Mã định danh
  * @property {string} firstname - Họ
  * @property {string} lastname - Tên
  * @property {string} gender - Giới tính
  * @property {number} point - Điểm tổng kết
  */
 
 /**
  * @typedef {object} studentWithFullname
  */
  const students = [
    {
        id:1,
        firstname:"ba",
        lastname:"phạm",
        gender:"m",
        point: "2",
    },
    {
        id:2,
        firstname:"Hà",
        lastname:"phạm",
        gender:"mi",
        point: "9",
    },
    {
        id:3,
        firstname:"baỏ",
        lastname:"trần",
        gender:"a",
        point: "3",
    },
    {
        id:4,
        firstname:"tâm",
        lastname:"phạm",
        gender:"ma",
        point: "2.5",
    },
];
 /**
  *
  * @param {student[]} students - Danh sách sinh viên
  *
  * @return {student[]}
  */
function mapFullname(student){
    return{
        id: student.id,
        fullname: student.firstname.concat(" ", student.lastname),
        gender : student.gender,
        point: student.point,
    };
}
 const studentWithFullname = students.map(mapFullname);
 console.log(studentWithFullname);

// sắp xếp theo điiểm (point) giảm dần
function compareByPoint(student1, student2){
    return student1.point -student2.point; 
}
students.sort(compareByPoint).reverse();
console.log(students);

function compareByFullname(student1,student2){
    return (
        student1.firstname.concat(" ", student1.lastname).length-
        student2.firstname.concat(" ",student2.lastname).length
    );
}
students.sort(compareByFullname);
console.log(students);

// lọc ra các học sinh có điểm trong khoảng 2-8
function isBetween5anh8(student){
    return student.point >=2 && student.point<=8;
}
let studentsGood = students.filter(isBetween5anh8);
console.log(studentsGood);

// tính điểm tb  của các học viên, tính gộp điểm, chia cho số lượng

function sumPoint(total,student){
    return total + student.point;
}
const total = students.reduce(sumPoint,0);
const avg = total / students.length;
console.log(avg);