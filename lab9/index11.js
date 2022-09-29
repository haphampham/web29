/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
 function maxOfThree(a, b, c) {
    if (a >= b && a >= c)
    {
        return a;
     }
     else if (b >= a && b >= c)
     {
        return  b;
     }
     else
     {
        return c;
     }
 }
 console.log(maxOfThree(7,44,5));
 /**
  * Tìm mùa tương ứng với tháng
  *
  * - Winter (mùa đông): 12, 1, 2
  * - Spring (mùa xuân): 3, 4, 5
  * - Summer (mùa hạ): 6, 7, 8
  * - Fall (mùa thu): 9, 10, 11
  *
  * @param {number} month Tháng trong năm
  *
  * @return {'Winter' | 'Spring' | 'Summer' | 'Fall'} Mùa tương ứng với tháng
  */
 function findSeason(month) {
   if(month == 12 || month == 1 || month == 2 ){
    return "Winter";
   }
   else if(month == 3 || month == 4 || month == 5) {
    return "Spring";
   }
   else if(month == 6 || month == 7 || month == 8){
    return "Summer";
   }
   else if(month == 9 || month == 10 || month == 11){
    return "Fall";
   }
 }
  console.log(findSeason(1));
  console.log(findSeason(10));
  console.log(findSeason(4));
  console.log(findSeason(8))
  



 /** 
  * Kiểm tra xem một năm có phải năm nhuận hay không
  *
  * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
  * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
  *
  * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
  * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
  * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
  *
  * @param {number} year Năm bất kỳ
  *
  * @return {boolean} Năm này có phải năm nhuận hay không
  */
 function isLeafYear(year) {
   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
      return true ;
   }
   return false ;
 }
 console.log(isLeafYear(2011));
 console.log(isLeafYear(2000));
 /** 
  * Tìm số ngày trong tháng
  *
  * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
  * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
  * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
  *
  * @param {number} month Tháng bất kỳ
  * @param {number} year Năm bất kỳ
  *
  * @return {number} Số ngày trong tháng đó
  */
 function findDayOfMonth(month, year) {
   if (
      month == 1 || month == 3 || month == 5 || month == 7 ||  month == 8 || month == 10 || month == 12
    ) {
      return " có 31 ngày";
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      return " có 30 ngày";
    } else if (month == 2) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return " có 29 ngày";
      }
      return " có 28 ngày";
    } else {
      return "không biết";
    }
  }  
console.log("thang 2 co bao nhieu ngay: ", findDayOfMonth(2, 2000));
console.log("thang 6 co bao nhieu ngay: ", findDayOfMonth(6, 2004));
console.log("thang 11 co bao nhieu ngay: ", findDayOfMonth(12, 2019));
 /**
  * Xếp loại sinh viên theo số điểm trung bình
  *
  * - Nếu điểm trung bình < 4.0 thì xếp loại 'F'
  * - Nếu điểm trung bình < 5.5 thì xếp loại 'D'
  * - Nếu điểm trung bình < 7.0 thì xếp loại 'C'
  * - Nếu điểm trung bình < 8.5 thì xếp loại 'B'
  * - Nếu điểm trung bình từ 8.5 đến 10 thì xếp loại 'A'
  *
  * @param {number} point Điểm trung bình của sinh viên
  *
  * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
  */
 function calcGrade(point) {
   if(point <= 4.0){
      return "F";
   }else if(point <= 5.5){
      return "D";
   }else if (point <= 7.0){
      return "C";
   } else if (point<= 8.5 ){
      return "B";
   }else if(8.5 <= point <= 10){
      return "A"
   }else return NaN;
 }
 console.log(calcGrade(10))
 console.log(calcGrade(9))
 console.log(calcGrade(1))
 console.log(calcGrade(7))

 
 /** 
  * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
  *
  * - Phí mở cửa cố định là `10.000đ`
  * - Giá cho `30km` đầu tiên là `11.000đ/km`
  * - Từ kilomet thứ `31` giá là `9.500đ/km`
  * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
  *
  * @param {number} km Số kilomet đã di chuyển
  *
  * @return {number} Số tiền phải trả
  */
 function calcTaxiFee(km) {
   if (km <= 30) {
      return 10000 + 11000 * km;
    } else {
      return 10000 + 330000 + (km - 30) * 9500;
    }
  }
  console.log("Tổng tiền cước cho 40km là:", calcTaxiFee(40));
  console.log("Tổng tiền cước cho 100km là:", calcTaxiFee(100));
  console.log("Tổng tiền cước cho 250km là:", calcTaxiFee(250));
 /**
  * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
  *
  * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
  * - Nếu phương trình vô nghiệm thì trả về `null`
  * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
  * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
  *
  * @param {number} a Tham số a
  * @param {number} b Tham số b
  * @param {number} c Tham số c
  *
  * @return {number | [number, number] | null} Nghiệm phương trình
  */
 function solveEquation(a, b, c) {
   
       delta = b * b - 4 * a * c;

      if(delta < 0) {
        return "null";
      } 

      if(delta == 0) {
      return " [ number , number ]";
          
      }
   
      if(delta > 0) {
      
         return  "number";
      }
}
 console.log(solveEquation(3 ,4 ,5));
 console.log(solveEquation(1 ,4 ,2));
 console.log(solveEquation(2,4 ,2));
 