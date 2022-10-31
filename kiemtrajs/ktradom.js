
const qt = document.querySelector(".qt");
const qtminus = document.querySelector(".qt-minus");
const qtplus = document.querySelector(".qt-plus");


qtplus.onclick = function () {
    qt.innerHTML = Number(qt.innerHTML) + 1;
 };

 qtminus.onclick = function () {
    qt.innerHTML -= 1;
 };
 