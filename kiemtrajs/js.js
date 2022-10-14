// XỬ LÍ SỐ
// EX1
function thetichmatcau(r)
 
{
    let PI= 3.14;
    return (4/3)*PI*r*r*r;
}

console.log(thetichmatcau(4));
// EX2



// Ex3
function Tong_UocSo( N)
{
    let tong = 0;
    for (let i = 1; i <= N; i++)
    {
        if (N % i == 0)
            tong+= i;
    }

    return tong;
}
 console.log(Tong_UocSo(15));
 console.log(Tong_UocSo(36));

 // Ex4
 function laSoNguyenTo (n) {
    let prime = true;
    if (n < 2) prime = false;
    else if (n === 2) prime = true;
    else if (n % 2 === 0) prime = false;
    else {
      for (let i = 3; i < n - 1; i += 2) {
        if (n % i === 0) prime = false;
      }
    }
    return prime;
}
console.log(laSoNguyenTo(17));

//Ex5
function flosuthantien(n) {
    let tong =0 ;
    for(let i = 3; i < n - 1; i += 2 )
        if( n > 3 && n % i ===0){
         tong = tong+n;
        }
         return tong;
    
      }
          console.log(flosuthantien(195));

// XỬ LÍ CHUỖI
//EX1
function capitalize(str) {
    str = str.toLowerCase();
    str= str[0].toUpperCase() + str.slice(1);
 
    let position =1;
    let spaceIndex = str.indexOf(" ");
 
    while (spaceIndex !== -1){
       
       str =str.slice(0, spaceIndex +1 ) +// "anh em siêu nhân"
        str[spaceIndex+1].toUpperCase()+
        str.slice(spaceIndex +2); //'s fun'
 
        position = spaceIndex+2;
        spaceIndex= str.indexOf(" ",position)// tìm ký tự đầu tiên
    }
    return str;
  }
 console.log(capitalize("javascirpt id Fun"));  
 // Ex2
 function spinalCase(str) {
  let res = str.replace(/\s/g, "-")
  let result = res.replace(/_/g, '').toLowerCase();
  return result;
}      
console.log(spinalCase("javascirpt ID Fun")); 
// EX3

//  function KiemTraChuoiDoiXung (){
//       let  inputString = scanner.nextLine();
//    let length = inputString.length();
//         for ( let i = length - 1 ; i >= 0 ; i-- )
//             return  reverseString + inputString.charAt(i);
//         if (inputString.equals(reverseString))
//            return true;
//         else
//            return false;
//     }
//  console(KiemTraChuoiDoiXung("Race car" ));


//XU LI MANG
  //EX1
  var numbers = [];
  for (var i = 0; i < 3; i++){
   numbers[i] = [];
    for (var j = 0; j < 4; j++){
    numbers[i][j] = Math.floor+Math.random();
}
  }

  console.log(numbers(1,2,3,4,5,6,7,8,9,));
// Xử lý object
const students = [
    {
        name: "huyền",
         age: 20,
    },
    {
        name: "Hảo",
         age: 21,
    },
    {
        name: "lan",
        age: 28,
    },
    {
        name: "bảo",
         age: 25,
    },
];
// EX1
function sumPoint(total,student){
    return total + student.age;
}
const total = students.reduce(sumPoint,0);
const avg = total / students.length;
console.log(avg);

// Ex 2
function compareByPoint(student1, student2){
    return student1.age -student2.age; 
}
students.sort(compareByPoint).reverse();
console.log(students);

// Ex 3
function namee(){
 return sorted = students.sort();
}
console.log(students);

// Ex4
let findPro = students.filter((students) => {
    return students.name.toLowerCase().includes("H" && "h");
  });
  console.log(findPro);

  
