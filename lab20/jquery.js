// console.log($);// jQuery

// // thư viện cung cấp các phương thức để thao tác với DOM
// // ưu điểm :cú pháp ngắn gọn, dễ nhớ, thuận tiện

// // $: là đối tượng jQuery | ko gian tên (namespace)=> hàm $() |$
// // đối tượng hàm
// // function hello(){

// // }
// // hello.name ="ahihh"
// // hello()
// // hello.name

// // tìm
// const $h1 = $("h1");// tìm tất
// console.log($h1);

// // chỉnh sửa

// console.log($h1.text());// getter - lấy nội dung của phần tử ddaauf tiên
// $h1.text("bú bú");// setter - sửa nội dung của tát cả phần tử

// $h1.html("<sapn>Búa búa</sapn>");

// console.log($h1.html()); // getter - lấy html của phần tử đầu tiên
// $h1.html("<sapn>Búa búa</sapn>")// setter - sửa html của tất cả các phananf tử

// console.log($h1.attr("id")); // getter - lấy thông tin thuộc tính của phần tử đầu tiên
// $h1.attr("id", "my-id"); // setter - sửa id của tất cả phần tử

// $h1.attr({
//     id:"myId",
//     title:"my",
//     lang:"en",
// }); // setter - sửa cùng lúc nhiều thuộc tính


// // $h1.addClass("class1 class2 class3");
// // // $h1.removeClas("class2 class3");
// // $h1.toggleClas("check");
// // console.log($h1.hasClass("check"));

// $h1.css("background-color","pink");

// $h1.css({
//     backgroundColor: "red",
//     width: "600px",
// });

// $h1.data({
//     product:1,
//     quantity :10,
// });
// console.log($h1.data());

// const $input = $ ("input");

// console.log($input.val());
// $input.val("hậdsndksma");

// const $select = $("select");
// console.log($select.val());
// $select.val(2);
// $input.remove();



const $app = $("#app");

const $h1  = $("<h1 class= 'heding'>BÚ </h1>"
)

const $p = $("<p />",{
    id:"bú",
    class: "bú bú",
    html:"bú bú bú<b>30</b>bú",
    click: function () {
        console.log("clicked");
    },
});

$app.append($h1 ,$p);


// sự kiện 
const $btn = $("button");

const data = {
    value: 1,
};
$btn.on("click", data, function(e){
    console.log(e);
    console.log(e.data);
});

$btn.one("click", function (e) {
    console.log("bú và bú ");
});