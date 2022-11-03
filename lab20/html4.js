function getProductById(id) {
    return products.find(function (product) {
        return product.id === id;
    });
}

function productInfo(item) {
    return {
        quantity: item.quantity,
        product: getProductById(item.product),
    };
}

function increase(item, el) {
    const cartItem = cart.find(function (cartItem) {
        return cartItem.product === item.product.id;
    });

    cartItem.quantity += 1;
    el.querySelector(".quantity").innerText = cartItem.quantity;

    updateTotalBill();
}

function decrease(item, el) {
    const cartItem = cart.find(function (cartItem) {
        return cartItem.product === item.product.id;
    });

    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        el.querySelector(".quantity").innerText = cartItem.quantity;

        updateTotalBill();
    }
}

function calcTotalBill() {
    const data = cart.map(productInfo);

    return data.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
    }, 0);
}

function updateTotalBill() {
    const total = calcTotalBill();

    document.querySelector(".total-price .price").innerText = total;
}

function createCartItem(item) {
    const template = document
        .querySelector("#cart-item")
        .content.firstElementChild.cloneNode(true);

    const thumbnail = template.querySelector(".product-thumbnail img");
    const title = template.querySelector(".product-title");
    const price = template.querySelector(".product-price");
    const quantity = template.querySelector(".quantity");
    const btnUp = template.querySelector(".btn-up");
    const btnDown = template.querySelector(".btn-down");

    thumbnail.src = item.product.image;
    thumbnail.alt = item.product.title;

    title.innerText = item.product.title;
    price.innerText = item.product.price;

    quantity.innerText = item.quantity;

    btnUp.onclick = function () {
        increase(item, template);
    };
    btnDown.onclick = function () {
        decrease(item, template);
    };

    return template;
}

function renderCartList() {
    const list = document.querySelector(".cart-list");
    const data = cart.map(productInfo);

    for (let item of data) {
        const cartItem = createCartItem(item);

        list.append(cartItem);
    }

    updateTotalBill();
}
