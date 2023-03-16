const productsCart = document.querySelector(".product-cart__list");

const products = cartLS.list();
function render() {
  products.map((item) => {
    const sumPrice = item.quantity * item.price;
    console.log(item);
    return (productsCart.innerHTML += `
        <div class="product-cart__item">
              <div class="product-cart__img">
                  <img src="${item.img}" alt="" class="product-cart__image">
              </div>
      
              <h3 class="product-cart__title">${item.name}</h3>
      
              <div class="product-cart__quantity">
                  <i onclick="minusProduct(${item.id})" class="fa-solid fa-minus product-cart__quantity-minus"></i>
                  <span class="product-cart__quantity--num">${item.quantity}</span>
                  <i onclick="plusProduct(${item.id})" class="fa-solid fa-plus product-cart__quantity-plus"></i>
              </div>
              <p class="product-cart__price-sum">SGD <span>${sumPrice}</span>.00</p>
              <i onclick="deleteProduct(${item.id})" class="fa-solid fa-xmark product-cart__close"></i>
          </div>
        `);
  });
}
render();
function minusProduct(id) {
  cartLS.quantity(id, -1);
  productsCart.innerHTML = "";
  setTimeout(() => {
    location.reload();
  }, 500);
}
function plusProduct(id) {
  cartLS.quantity(id, 1);
  productsCart.innerHTML = "";
  setTimeout(() => {
    location.reload();
  }, 500);
}
function deleteProduct(id) {
  cartLS.remove(id);
  productsCart.innerHTML = "";
  setTimeout(() => {
    location.reload();
  }, 500);
}
