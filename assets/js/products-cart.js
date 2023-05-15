const productsCart = document.querySelector(".product-cart__list");
const totalProduct = document.querySelector(".product-cart__sum-number");
const checkOut = document.querySelector(".product-cart__checkout-btn");

const products = cartLS.list();
function render() {
  products.map((item) => {
    if (item.status === true) {
      return (productsCart.innerHTML += `
            <div class="product-cart__item">
                  <div class="product-cart__img">
                      <img src="${item.img}" alt="" class="product-cart__image">
                  </div>
          
                  <h3 class="product-cart__title">${item.name}</h3>
          
                  <div class="product-cart__quantity">
                      
                      <span class="product-cart__quantity--num">1</span>
                      
                  </div>
                  <p class="product-cart__price-sum">£ <span>${item.price}</span>.00</p>
                  <i onclick="deleteProduct(${item.id})" class="fa-solid fa-xmark product-cart__close"></i>
              </div>
            `);
    }
  });
}
render();
const totalPrice = () => {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].status === true) {
      sum = sum + products[i].price;
    }
  }
  return sum;
};

totalProduct.innerText = totalPrice();
const loading = `<div class="loading">
<span class="loading__inner"></span>
</div>`;
function deleteProduct(id) {
  cartLS.remove(id);
  productsCart.innerHTML = loading;
  setTimeout(() => {
    location.reload();
  }, 500);
}
checkOut.addEventListener("click", () => {
  cartLS.list().map((item) => {
    if (item.status === false) {
      cartLS.remove(item.id);
    }
  });
});
