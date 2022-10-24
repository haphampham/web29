//  const u = document.getElementById("password").value;
//     const p = document.getElementById("password").value;

//     if(u == "") {
//         alert("Please enter your Username");
//         return false;
//     }
//     if(p == "") {
//         alert("Please enter you Password");
//         return false;
//     }

//     alert("All datas are valid!, send it to the server!")

//     return true;





function echo(currentField){
    if (currentField == "first")
      document.registrationForm.password.value = document.registrationForm.password.value; 
    else
      document.registrationForm.password.value = document.registrationForm.confirmPassword.value; 
  }