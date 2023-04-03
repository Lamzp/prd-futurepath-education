const stepCart = document.querySelector(".cart-js");

const products = cartLS.list();
function render() {
  products.map((item) => {
    const sumPrice = item.quantity * item.price;
    return (stepCart.innerHTML += `
    <div class="step-cart">
    <div class="step-cart__images">
        <img src="${item.img}" alt="">
    </div>
    <div class="step-cart__item">
        <h3 class="step-cart__title">
            ${item.name}</h3>
    </div>
    <a href="#!" class="step-cart__link">Change</a>
</div>
<!-- day -->
<p class="step-right__day">
    January - 13th January 2024
</p>
<!-- code -->
<div class="step-code">
    <input type="text" class="step-code__input"
        placeholder="I have a referral discount code">
    <button class="step-code__btn">Apply</button>
</div>
<!-- price -->
<div class="step-code__price">
    <h3 class="step-code__title">Price details</h3>
    <div class="step-code__row">
        <p class="step-code__info">Programme Fee</p>
        <p class="step-code__number">£ <span>${item.price}</span></p>
    </div>
</div>
        `);
  });
}
render();
