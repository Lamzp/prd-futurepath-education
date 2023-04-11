const productsCart = document.querySelector(".product-cart__list");
const totalProduct = document.querySelector(".product-cart__sum-number");

const products = cartLS.list();
function render() {
  products.map((item) => {
    const sumPrice = item.quantity * item.price;
    return (productsCart.innerHTML += `
        <div class="product-cart__item">
              <div class="product-cart__img">
                  <img src="${item.img}" alt="" class="product-cart__image">
              </div>
      
              <h3 class="product-cart__title">${item.name}</h3>
      
              <div class="product-cart__quantity">
                  
                  <span class="product-cart__quantity--num">${item.quantity}</span>
                  
              </div>
              <p class="product-cart__price-sum">£ <span>${sumPrice}</span>.00</p>
              <i onclick="deleteProduct(${item.id})" class="fa-solid fa-xmark product-cart__close"></i>
          </div>
        `);
  });
}
render();
totalProduct.innerText = cartLS.total();
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
