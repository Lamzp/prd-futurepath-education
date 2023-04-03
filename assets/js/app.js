const mobile_nav_toggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const faqsAccordionHeader = document.querySelectorAll(
  ".faqs-accordion__header"
);
const menu = document.querySelector(".navigation-primary");
const header = document.querySelector(".header");
const strongHero = document.querySelectorAll(".hero strong");
const animationUp = document.querySelectorAll(".animation-up");
const navLink = document.querySelectorAll(".nav-link");
const navItem = document.querySelectorAll(".nav-list > .nav-item");

[...navItem].forEach((item) => {
  item.addEventListener("click", () => {
    const subNav = item.querySelector(".sub-nav");
    const ic = item.querySelector(".nav-item__icon");
    ic.classList.toggle("is-active");
    subNav.classList.toggle("active");
  });
});
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
window.addEventListener(
  "scroll",
  debounceFn((e) => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 95) {
      menu && menu.classList.add("is-fixed");
      header.classList.add("has-space");
    } else {
      menu && menu.classList.remove("is-fixed");
      header.classList.remove("has-space");
    }
  }, 10)
);
const handleClickMobileNavToggle = (e) => {
  mobile_nav_toggle.classList.toggle("open");
  navList.classList.toggle("active");
};
const handleClickAccordionHeader = (e) => {
  const faqsAccordionContent = e.target.nextElementSibling;

  faqsAccordionContent.style.height = `${faqsAccordionContent.scrollHeight}px`;
  faqsAccordionContent.style.visibility = "visible";
  faqsAccordionContent.classList.toggle("active");
  if (!faqsAccordionContent.classList.contains("active")) {
    faqsAccordionContent.style.height = "0px";
    faqsAccordionContent.style.visibility = "hidden";
  }

  const ic = e.target.querySelector(".faqs-accordion__icon");
  ic.classList.toggle("rotate");
};
const handleClickNavLink = (e) => {
  e.target.classList.add("active");
};

[...navLink].forEach((item) => {
  item.addEventListener("click", handleClickNavLink);
});
mobile_nav_toggle.addEventListener("click", handleClickMobileNavToggle);
[...faqsAccordionHeader].forEach((item) => {
  item.addEventListener("click", handleClickAccordionHeader);
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("active");
        entry.target.classList.toggle("is-active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

[...strongHero].forEach((item) => {
  observer.observe(item);
});
[...animationUp].forEach((item) => {
  observer.observe(item);
});

const idP = document.querySelector(".enroll-sell__id");
const nameP = document.querySelector(".enroll-sell__heading");
const priceP = document.querySelector(".enroll-sell__price-num")?.textContent;
const imgP = document.querySelector(".enroll-sell__img img");
const formSell = document.querySelector(".enroll-sell__quantity");
const btnFormSell = document.querySelector(".enroll-sell__btn span");

// submit to add Local
formSell &&
  formSell.addEventListener("submit", (e) => {
    // e.preventDefault();

    const price = +priceP.split(",").join("");
    const img = imgP.getAttribute("src");
    const quantity = +e.target.elements.quantity.value;
    const id = +e.target.elements.id.value;
    const product = {
      id,
      img,
      name: nameP.textContent,
      price: price,
    };
    btnFormSell.innerText = "Adding...";
    cartLS.add(product, quantity);
  });
