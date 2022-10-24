 const btn = document.querySelector(".btn");
const  w = document.querySelector("#weight");
const h = document.querySelector ("#height");
const result = document.querySelector("#result");

function isNumber (value){
    return value.trim() !=="" &&! Number.isNaN(Number(value));

}
function setError (input, message){
 const parent =   input.closest(".form-field");
parent.document.querySelector(".error-feedback").innerText=message;
 parent.classList.add("is-invalid");
}
btn.addEventListener("click", function(){
    // lấy giá trị của 2 ô input
    const weight = w.value;
    const height = h.value;
    // tính toán theo công thức
    const bmi = weight / height ** 2;

    let isValid = true
  // validate  dữ liệu
  if (!isNumber (weight)){
    // w.parentElement.classList.add("is-invalid");
    setError(w," giá trị cân nặng ko phù hợp")
    isValid = false;
  } else w.parentElement.classList.remove("is-invalid");
  if (!isNumber (height)){
    // h.parentElement.classList.add("is-invalid");
    
    isValid = false;
  }else h.parentElement.classList.remove("is-invalid");

    // hiện thị kết quả
    if (isValid){
    if (bmi < 18.5) result.innerText
     = "BIM = " + bmi +" thiếu cân";
     else if(18.5 <= bmi && bmi < 25 ) result.innerText
     ="BIM = " + bmi +" bình thường";
    else if(25 <= bmi && bmi<30)
   result.innerText
   ="BIM = " + bmi +" bình thường";
  else result.innerText
   = "BIM = " + bmi +" béo phì";
    }
});
