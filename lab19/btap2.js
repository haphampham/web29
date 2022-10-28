// bấm vào cốc 

// nếu cốc chưa uống
// lấy index của cốc điền fill tất cả cốc trước đó

// nếu cốc đẽ uống
// === cốc hiện tại là index cao nhất
// --------- bỏ fill cốc này ,cập nhật , goal
// --- cốc hiện tại có index thaaps hơn index cao nhất thì bỏ fill cốc phía sau 

const cup = document.querySelector(".cu");
const renner = document.querySelector(".renner");
const drank = document.querySelector(".drank");
let current = 0;


const fill = function (index){
    for(let i = 0; i<= index; i++){
        cup[i].classList.add("has-drank");
    }
}
const unfill = function(from,to){
    for (let i = from; i<= to ; i++){
        cup[i].classList.remove("has-drank");
    }
};

const update = function (total){
    renner.innerText = 2- total * 0.25 + "l";

    drank.style.flexBasic = (total / 8) * 100 + "%";
    drank.innerText = (total / 8) * 100 + "%";
};

const setup  = function(){
    cup.forEach(function(cu,index){
        cu.onclick = function(){
            if( cu.classList.container("has-drank")){  
                if(index === current) {
                    unfill(index,current);
                    current = index -1;
                } else{
                    unfill(index,current);
                    current= index;
                } 
                update(current+1); 
            }else{
                current=index;
                fill(index);
                update(index +1);
            }
      };
     
    });
    
};