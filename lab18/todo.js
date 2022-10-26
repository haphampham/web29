// hiển thị dnah sách công việc và số lượng các công vc cần hoàn thành 
// thêm mới 1 công việc cần làm thông qua nhập vào form
// đnahs dấu một công việc là hoàn thành
// xóa 1 công việc
// xóa tất cả công việc
// lọc theo trạng thái
const todolist 
function createId() {
    let id = Math.floor(Math.random() * 10000);
    return id;
}

let todos = [
    {
        id: createId(),
        title: "Làm bài tập",
        status: true
    },
    {
        id: createId(),
        title: "Chơi với bạn bè",
        status: false
    },
    {
        id: createId(),
        title: "Sang nhà chị thăm người ốm",
        status: true
    },
];
function  createToItem(todo){
    const div = document.createElement("div");
    div.className = todo.status? "todo-item comleted": "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type



    
}

function render (){
    todos.forEach(function(todo){
        const item =  createElement(todo);
        todolist.pre
    })
}
       
   