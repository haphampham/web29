const boxes = document.querySelector(".boxes");
const points = document.querySelector(".points");
const btn  = document.querySelector("#btn");
let colors = [ '#3498db','#9b59b6','#e74c3c','#2c3e50','#d35400',]
function createBOx(color){
    const div = document.createElement("div");

    div.classList.add("box");
    div.style.backgroundColor = color;

    div.addEventListener('click',function(){
        div.remove();
        points.innerText = boxes.children.length;
    });

    return div;
}

function render(){
    for( let  color of colors){
        const div = createBOx(color);
 
       boxes.append(div);
        
    }

    points.innerText = boxes.children.length;
}
btn.onclick = render;

render();


// default event
// propagation
// delegation
// capture/bybble


// let concak = ["username", "password", "confirm password"]
// const input = document.querySelector("input");
// const pass = document.querySelector("password");
// const conpass = document.querySelector ("confirmPassword")
// input.addEventListener('input', function(e){
//   e.target.value;

//   input.innerText = e.target.value;

// });
