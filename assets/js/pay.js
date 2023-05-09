const stepCart = document.querySelector(".cart-js");
const payCategory = document.querySelectorAll('input[name="pay"]');
const onOf = document.querySelectorAll('input[name="on-of"]');
const payText = document.querySelector(".pay-text");
const radioGroupPrevious = document.querySelector(".radio-group--previous");
const radioOnlineChecked = document.querySelector(".radio-group.checked");

const products = cartLS.list();
const product_id = cartLS.list()[0].id;
const product = cartLS.get(product_id);
const ONLINE_ID = 100;
const product_online = {
  img: "../assets/images/add1.jpg",
  name: "Online Insights Programme (All Year)",
  price: "1125",
};
if (product_id === ONLINE_ID) {
  if (radioGroupPrevious) radioGroupPrevious.style.display = "none";

  if (payText)
    payText.innerHTML = `<span class="pay-text__title">Secure your place at this programme by paying a deposit of £<span class="on-off">225</span> </span>`;
} else {
  if (payText)
    payText.innerHTML = `<span class="pay-text__title">Secure your place at this programme by paying a deposit of £<span class="on-off">795</span> </span>`;
  [...onOf].forEach((item) => {
    item.addEventListener("change", (e) => {
      if (e.target.value === "off") {
        payText.innerHTML = `<span class="pay-text__title">Secure your place at this programme by paying a deposit of £<span class="on-off">795</span> </span>`;
      } else {
        payText.innerHTML = `<span class="pay-text__title">Secure your place at this programme by paying a deposit of £<span class="on-off">225</span> </span>`;
      }
    });
  });
}
function render() {
  products.map((item) => {
    return (stepCart.innerHTML += `
      <div class="step-cart">
      <div class="step-cart__images">
          <img src="${item.img}" alt="">
      </div>
      <div class="step-cart__item">
          <h3 class="step-cart__title">
              ${item.name}</h3>
      </div>
      <a href="../pages/enroll.html" class="step-cart__link">Change</a>
  </div>
  <!-- day -->
  <p class="step-right__day">
      
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
[...onOf].forEach((item) => {
  item.addEventListener("change", (e) => {
    if (e.target.value === "off") {
      stepCart.innerHTML = "";
      products.map((item) => {
        stepCart.innerHTML += `
        <div class="step-cart">
        <div class="step-cart__images">
            <img src="${item.img}" alt="">
        </div>
        <div class="step-cart__item">
            <h3 class="step-cart__title">
                ${item.name}</h3>
        </div>
        <a href="../pages/enroll.html" class="step-cart__link">Change</a>
    </div>
    <!-- day -->
    <p class="step-right__day">
        
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
            `;
      });
    } else {
      stepCart.innerHTML = "";
      stepCart.innerHTML += `
        <div class="step-cart">
        <div class="step-cart__images">
            <img src="${product_online.img}" alt="">
        </div>
        <div class="step-cart__item">
            <h3 class="step-cart__title">
                ${product_online.name}</h3>
        </div>
        <a href="../pages/enroll.html" class="step-cart__link">Change</a>
    </div>
    <!-- day -->
    <p class="step-right__day">
        
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
            <p class="step-code__number">£ <span>${product_online.price}</span></p>
        </div>
    </div>
            `;
    }
  });
});

function priceRender() {
  [...payCategory].forEach((item) => {
    item.addEventListener("change", (e) => {
      if (e.target.value === "deposit") {
        payText.innerHTML = `<span class="pay-text__title">Secure your place at this programme by paying a deposit of £<span class="on-off"></span> </span>`;
      } else {
        payText.innerHTML = `<span class="pay-text__title">Pay a full fee of £${product.price}</span>`;
      }
    });
  });
}
priceRender();
