 // Gán sự kiện cho nút
/* Declaring variables. */
const btn = document.querySelector(".btn");
const w = document.querySelector("#weight");
const h = document.querySelector("#height");
const result = document.querySelector(".result-number");
const title = document.querySelector(".result-title");
const img = document.querySelector(".result-image");
const content = document.querySelector(".result-content");

const data = {
    underweight: {
        title: "Chỉ số BMI dưới 18,5 là thiếu cân",
        content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
        image: "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    normal: {
        title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
        content: "Bạn có một cơ thể tốt.",
        image: "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    overweight: {
        title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
        content:
            "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
        image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    fat: {
        title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
        content:
            "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
        image: "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
    },
};

function isNumber(value) {
    return value.trim() !== "" && !Number.isNaN(Number(value));
}

function setError(el, message) {
    const parent = el.closest(".form-field");

    parent.querySelector(".error-feedback").innerText = message;
    parent.classList.add("is-invalid");
}

function setSuccess(el) {
    const parent = el.closest(".form-field");

    parent.classList.remove("is-invalid");
}

function validate() {
    let isValid = true;

    if (!isNumber(w.value)) {
        setError(w, "Giá trị cân nặng không phù hợp");
        isValid = false;
    } else setSuccess(w);

    if (!isNumber(h.value)) {
        setError(h, "Giá trị chiều cao không phù hợp");
        isValid = false;
    } else setSuccess(h);

    return isValid;
}

function getResultData(bmi) {
    let key;
if (bmi < 18.5) key = "underweight";
    else if (bmi < 25) key = "normal";
    else if (bmi < 30) key = "overweight";
    else key = "fat";

    return data[key];
}

function renderResult(bmi) {
    const data = getResultData(bmi);

    result.innerText = "Chỉ số BMI của bạn là: " + bmi;
    title.innerText = data.title;
    img.src = data.image;
    content.innerText = data.content;
}

 btn.addEventListener("click", function () {
    let isValid = validate();

    if (isValid) {
        const weight = w.value;
        const height = h.value;

        const result = weight / height ** 2;

        renderResult(result);
    }
});
