// ngôn ngữ lập trình 
// cú pháp , cấu trúc,các kiểu dữ liệu cơ bản
// cung cấp thêm các API khác  nhau (tùy thuộc vào môi trường)
// trong môi trường trình duyệt ,trình duyệt cung cấp API DOM chp phép làm việc với nội dug trên trang web
//- DOM :document object model
// - BOM:browser object model

// đều là obj: thuộc tính và phương thức
//bom là đối tượng đại diện cho cửa sổ trình duyệt , 
//có cá thuộc tính mô tả thông tin về trihf duyệt , và các phương thức để thoa tác vs cửa sổ trình duyệt

// dom là đối tượng đại diện cho tài liệu html , có cá thuộc tính mô tả / truy cập đến các thông tin trong tì liệu ,và các pthuc


// cáu trúc dom biểu diễn cấu trúc nội dung tương ứng trong html
// tất cả mội thứ đều có một node tương ứng trong dom
//-----
// documnet
document.head // truy cập trực tiếp đến thẻ <head />
document.title; // đến thẻ <title />
document.body; // <body />
document.links; // collection chưa tất cả các thẻ <a /> hiển thị trên mạng
document.forms; // <form /> trên trang
document.images; // <img /> trên trang
document.cookie; // lưu trữ dữ liệu trao đỏi giữa server vs client
document.write("<h2>đây là siêu nhân gao ồ </h2>");
document.title = " xin chào ";

console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.links);
console.log(document.forms);
console.log(document.images);

const body = document.body;// node body
console.log(body.nodeName);
console.log(body.nodeType);
console.log(body.parentNode);
console.log(body.previousSibling);

const space = body.previousSibling;
const head = space.previousSibling;

console.log(head);
console.log(body.previousSibling);
console.log(body.firstChild);
console.log(body.lastChild);
console.log(body.childNodes);
console.log(body.hasChildNodes());

const text = document.body.firstChild;
console.log(text);
console.log(text.textContent); // văn bản trong node
text.textContent = " cu"; // chỉnh sửa văn bản trong node
//text.textContent
console.log(text.nodeName);
console.log(text.nodeType);
console.log(text.hasChildNodes());
console.log(text.childNodes);
// element => tất cả những node là thẻ html(nodetype = 1)
console.log(body.attributes);
 //console.log(body.attributes.lang.value);
console.log(body.children); // khác childnode
console.log(body.innerHTML); // nội dung html của thẻ
console.log(body.innerText); // nội dung văn bản
console.log(body.tagName);
console.log(body.scrollTop);
console.log(body.children[2]);

// tùy thuộc vào từng loại thẻ khác nhau , sẽ có các thuộc tính / phương thức bổ sung 
console.log(document.body.lang);
console.log(document.body.id);
console.log(document.body.title);
console.log(document.body.className);
console.log(document.body.style);
console.log(document.body.translate);
console.log(document.body.dir);
console.log(document.body.tabIndex);

// previousSibling=> previousElementSibling
// nextSibling => nextelementSibling
// parenNode => parenElement
// firstChild 

const a = document.body.firstElementChild;
console.log(a.href);
console.log(a.target);
const img = document.body.children[0];
console.log(img.src);
console.log(img.alt);


// collection - bộ sưu tầm chứa các phần tử dom(children, childnode)
// collection và list chỉ có thao tác lặp , chứ ko có các phương thức của mảng
 
const bodyư = document.body;
const children = body.children; // htmlcollection [a, form,img, script]


for(let element of children){
    if (element.nodeType === 1 && element.tagName === "A"){
        a = element;
        break;
    }
}
a.href="https://www.w3schools.com/w3images/bandmember.jpg";
a.target = "_blank";
a.textContent ="đi đến gggg";



for(let element of children){
    if (element.nodeType === 1 && element.tagName === "img"){
        img = element;
        break;
    }
}
img.href="https://i114.ntcdntempv3.com/data/images/37094/680766/034-fix.jpg?data=net";
img.target = "_blank";
img.textContent ="https://i114.ntcdntempv3.com/data/images/37094/680766/034-fix.jpg?data=net";

//tổng kết window
// window là đối tượng cấp cao nhất đại diện cho toàn bộ cauwr sổ trình duyệt 
// bom - các đối tượng đặc biệt cho pép truy cập thông tin về trình diuyeetj , điều khiển trình duyrtj
// dom - là đối tượng đại diện cho taionf bộ nội dung html hiển thị trên trang
// node :tất cả mọi thứ trong html=> node trong dom
// element là các node có nodetype ===1 => có các thuộc tính 


const table = document.body.firstElementChild;
const tbody= table.tBodies[0];

const rows= tbody.rows

for( let row of rows){
    const rowIndex = row.rowIndex;
    const cells = row.cells;

    const cell = cells[rowIndex];
    cell.style.backgroundColor ="red";
}
// các phương thức để chọn / tìm kiếm phần tử trên trang 
// các phương thức cũ 
document.getElementById();
document.getElementsByTagName();

// các phương thức mới hơn
// chọ theo bộ chọn css
document.querySelector(); // chọn 1 cái đầu tiên khớp
document.querySelectorAll(); // CHỌN TẤT CẢ

// ưu điiểm 
// 1. thống nhất chung 1 API để tìm kiếm các phần tử
// 2. nó có thể sử dụng ở trên bất kì node nào , chỉ tìm kiếm trong các node con
div.querySelector();

// hạn chế 
// collection tĩnh
//---------------
// innerHTML sẽ thay thế toàn bộ văn bản hiện tại
// thường sử dụng để render ra 1 danh sách  item ko yêu cầu 
