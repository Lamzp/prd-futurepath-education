// if number cart > 0 hidden icon cart
if (cartLS.list().length > 0) {
  const divCartFixed = document.createElement("div");
  const body = document.body;
  body.appendChild(divCartFixed);
  divCartFixed.classList.add("cart-fixed");
  divCartFixed.innerHTML = `
      <a href="./pages/products-cart.html">
        <span class="cart-fixed__quantity">${cartLS.list().length}</span>
        <i class="fa-solid fa-cart-shopping cart-fixed__ic"></i>
      </a>
  `;
}
