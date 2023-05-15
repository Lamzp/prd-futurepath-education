const stepCart = document.querySelector(".cart-js");
const payCategory = document.querySelectorAll('input[name="pay"]');
const onOf = document.querySelectorAll('input[name="on-of"]');
const payText = document.querySelector(".pay-text");
const radioGroupPrevious = document.querySelector(".radio-group--previous");
const radioOnlineChecked = document.querySelector(".radio-group.checked");
const continueNextPage = document.querySelector(".contact-form__btn--one");

const products = cartLS.list();
const product_id = cartLS.list()[0].id;
const productPay = cartLS.get(product_id);
const ONLINE_ID = 100;
const product_online = {
  id: 100,
  img: "../assets/images/add1.jpg",
  name: "Online Insights Programme (All Year)",
  price: "1125",
  status: true,
};
cartProduct(
  cartLS.get(product_id).img,
  cartLS.get(product_id).name,
  cartLS.get(product_id).price
);
// if online only hidden 225
if (product_id === ONLINE_ID) {
  if (radioGroupPrevious) radioGroupPrevious.style.display = "none";
  if (payText)
    payText.innerHTML = `<span class="pay-text__title--deposit">Secure your place at this programme by paying a deposit of £<span class="on-off">225</span> </span>`;
} else {
  if (payText)
    payText.innerHTML = `<span class="pay-text__title--deposit">Secure your place at this programme by paying a deposit of £<span class="on-off">795</span> </span>`;
  [...onOf].forEach((item) => {
    item.addEventListener("change", (e) => {
      if (e.target.value === "off") {
        payText.innerHTML = `<span class="pay-text__title--deposit">Secure your place at this programme by paying a deposit of £<span class="on-off">795</span> </span>`;
      } else {
        payText.innerHTML = `<span class="pay-text__title--deposit">Secure your place at this programme by paying a deposit of £<span class="on-off">225</span> </span>`;
      }
    });
  });
}
// [...onOf].forEach((item) => {
//   item.addEventListener("change", (e) => {
//     if (e.target.value === "off") {
//       payText.innerHTML = `<span class="pay-text__title--deposit">Secure your place at this programme by paying a deposit of £<span class="on-off">795</span> </span>`;
//     } else {
//       payText.innerHTML = `<span class="pay-text__title--deposit">Secure your place at this programme by paying a deposit of £<span class="on-off">225</span> </span>`;
//     }
//   });
// });

function cartProduct(img, name, price) {
  const template = `
      <div class="step-cart">
      <div class="step-cart__images">
          <img src="${img}" alt="">
      </div>
      <div class="step-cart__item">
          <h3 class="step-cart__title">
              ${name}</h3>
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
          <p class="step-code__number">£ <span>${price}</span></p>
      </div>
  </div>
          `;
  stepCart.innerHTML = "";
  stepCart.insertAdjacentHTML("beforeend", template);
}
[...onOf].forEach((item) => {
  item.addEventListener("change", (e) => {
    cartLS.update(product_id, "status", true);
    cartLS.update(ONLINE_ID, "status", false);
    if (e.target.value === "off") {
      cartProduct(
        cartLS.get(product_id).img,
        cartLS.get(product_id).name,
        cartLS.get(product_id).price
      );
    } else {
      cartLS.remove(product_online.id);
      cartLS.add(product_online);
      cartLS.update(product_id, "status", false);
      cartLS.update(ONLINE_ID, "status", true);
      cartProduct(
        product_online.img,
        product_online.name,
        product_online.price
      );
    }
  });
});

function priceRender() {
  [...payCategory].forEach((item) => {
    item.addEventListener("change", (e) => {
      const payTextTitleDeposit = payText.querySelector(
        ".pay-text__title--deposit"
      );
      if (e.target.value === "deposit") {
        console.log("deposit");
        if (payTextTitleDeposit) payTextTitleDeposit.style.display = "block";
      } else {
        console.log("un-deposit");
        if (payTextTitleDeposit) payTextTitleDeposit.style.display = "none";
        payText.innerHTML = `<span class="pay-text__title--full">Full £<span class="on-off">${
          cartLS.get(product_id).price
        }</span> </span>`;
      }
    });
  });
}
priceRender();
continueNextPage &&
  continueNextPage.addEventListener("click", () => {
    cartLS.list().map((item) => {
      if (item.status === false) {
        cartLS.remove(item.id);
      }
    });
  });
