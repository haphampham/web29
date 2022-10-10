/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */

 function capitalize(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 console.log(capitalize("javascirpt id Fun"));
 /**
  * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
  *
  * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
  *
  * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
  *
  * @param {string} str Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
  */
 function title(str) {
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
 console.log(title("anh em siêu nhân"))
 
 /**
  * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @returns {number} Số ký tự nguyên âm có trong chuỗi
  */
 function countVowel(str) {
  let vcount = 0;
  for(let i = 0; i < str.length ; i++)
  {
    if (str.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
 }
 console.log(countVowel("HELLO WORLD"));
 
 /**
  * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
  *
  * @return {string} Màu ngẫu nhiên
  */
 function randomColor() {
    let allowed = "ABCDEF0123456789", S = "#";

    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
 }
 console.log(randomColor());
 /**
  * Đảo ngược thứ tự các từ trong chuỗi
  *
  * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi đảo ngược
  */
 function reverseWords(str) {
    if(str === ""){
    return "";}

    else {
        return reverseWords(str.substring(1) ) +str.charAt(0)
    }
    
 }
       console.log( reverseWords("hello"));
 /**
  * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
  *
  * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
  * @param {string} str Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi URL
  */
 function parameterize(str) {
    const arr= str.toLowerCase ().split(" ");
    return arr.join("-");
 }
 console.log(parameterize("SIÊU NHÂN "));