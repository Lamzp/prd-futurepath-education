// if number cart > 0 hidden icon cart
const cartLength = () => {
  let length = 0;
  for (let i = 0; i < cartLS.list().length; i++) {
    if (cartLS.list()[i].status === true) {
      length++;
    }
  }
  return length;
};
if (cartLS.list().length > 0) {
  const divCartFixed = document.createElement("div");
  const body = document.body;
  body.appendChild(divCartFixed);
  divCartFixed.classList.add("cart-fixed");

  console.log(cartLength());
  divCartFixed.innerHTML = `
      <a href="./products-cart.html">
        <span class="cart-fixed__quantity">${cartLength()}</span>
        <i class="fa-solid fa-cart-shopping cart-fixed__ic"></i>
      </a>
  `;
}
