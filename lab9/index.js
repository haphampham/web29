//   let  age =19;

// if (age>= 18) {
//     console.log("oke , bạn đc phép truy cập trang web");

// }else{
//     console.log("oke , bạn  ko đc phép truy cập trang web");
// }

// thực hiện các câu lệnh theonđiều kiện ,nếu sai thì ko làm gì cả 
let isRaining = true
if (isRaining)  {
    console.log("cởi áo ra")
}

// thực hiện 2 nhóm câu lệnh theo điều kiện 
let hasExercises = true;
if (hasExercises) {
    console.log("ngủ");
} else{
    console.log("dậy")
}

// các câu lệnh if else có thể lồng nhau ,giúp mk cho phép kiểm tra đk con
let isWeekend =false;
let inRelationship=true;

if(isWeekend){
    if(inRelationship){
        console.log("ngủ");
    }else{
        console.log("ngủ")
    }
}else{
    console.log("ngủ/ngủ")
}

// kiểm tra nhiều đk else if

let soNamKinhNgiem=10;

if(soNamKinhNgiem < 2){
    console.log("1 củ")
}else if(soNamKinhNgiem <4 ){
    console.log("2 củ")
}else{
    console.log("300 củ");
}


