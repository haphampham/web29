/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
 function printOddNumbers() {
    
    for(let i = 1 ;i <= 100; i += 2)console.log(i);
 }
printOddNumbers()
 /**
  * In dãy số chẵn trong khoảng từ 1 đến 100
  */
 function printEvenNumbers() {

    for ( let i = 1; i <= 100; i++){
        if(i % 2== 0)console.log(i);
    }
 }
 printEvenNumbers()
 /**
  * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
  * @param {number} n Số nguyên dương bất kỳ
  */
 function sumOfNumbers(n) {
    let sum =0;

    for (i = 1;i < n; i++){
        sum +=i;
    }
    console.log(sum);
 }
 sumOfNumbers(10);
 /**
  * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
  *
  * @returns {number} Tổng các số lẻ
  */
 function sumOfOddNumbers(start, end) {
    let sum = 0;
    start = start % 2 == 0 ? start + 1 : start;
    while(start <= end){
        sum += start;
        start += 2;
    }
    return sum;
 }
 console.log(sumOfOddNumbers(5,10));
 /**
  * Tìm các ước số của một số bất kỳ
  *
  * @param {number} number Số nguyên dương bất kỳ
  *
  * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
  */
 function divisor(number) {
     for(i = 1; i <= number; i++)
    if (number % i == 0)console.log(i)
}
 divisor(12);
 /**
  * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
  *
  * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
  *
  * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
  */
 function countFolding(thickness) {
    let count = 0
    let paper =0.1
    let thick = 1000* thickness;
    while(paper<thick ){
      paper*=2;
      console.log("độ dày hiện tại là",paper);
      count++;
    }
    return  count;
 }
 console.log("so lN CAN GAP LA",countFolding(100));
 /**
  * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
  *
  * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
  *
  * @param {number} dad Tuổi của cha
  * @param {number} son Tuổi của con
  *
  * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
  */
 function countYears(dad, son) {
    let count = 0;
    
    while(dad >son *2){
        count++;
        dad++;
        son++;
    }

    return count;
 }
 console.log(countYears(30,4));


// tìm số chân gà và chó
// vừa gà vừa chó bó lại cho tròn 36 c0n 100 chân chẵn
 function countLegs(){
    let dog = 0;
    const dogLegs = 4;
    const chickLegs = 2;
    const sum = 36;
    while (dogLegs *dog + (sum-dog) * chickLegs < 100){
        dog++;
    }
    console.log("số gaf:",sum - dog,"số chó:",dog);
 }
 countLegs();